import urllib
import numpy as np
from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from keras.models import Model, load_model
import cv2
from assets.yolov5.detect import detect

# img = cv2.cvtColor(cv2.imread('E:/Freelance/Tea_Fermentation/tea_trails/tea_trails_be/assets/test/fermented_577.png'), cv2.COLOR_BGR2RGB)
# img = cv2.cvtColor(cv2.imread('E:/Freelance/Tea_Fermentation/tea_trails/tea_trails_be/assets/test/overfermented_10.png'), cv2.COLOR_BGR2RGB)
# img = cv2.cvtColor(cv2.imread('E:/Freelance/Tea_Fermentation/tea_trails/tea_trails_be/assets/test/underfermented_1553.png'), cv2.COLOR_BGR2RGB)
# new_img = cv2.resize(img, (200,200))
# final_image = np.expand_dims(new_img, axis=0)
# out = model.predict_on_batch(final_image)
# print(np.argmax(out))

db = firestore.client()
record_Ref = db.collection('record')
processAPI = Blueprint('processAPI', __name__)

@processAPI.route('', methods=['POST'])
def predict():
    data = request.json
    img = data['img']
    quiz_no = data['quiz_no']
    print(quiz_no)
    response = urllib.request.urlopen(img)
    with open('assets/yolov5/data/image.jpg', 'wb') as f:
        f.write(response.file.read())

    path = 'assets/yolov5/models/best_numbers.pt'
    if quiz_no == '21' or quiz_no == '22' or quiz_no == '23':
        path = 'assets/yolov5/models/best_colors.pt'
    if quiz_no == '31' or quiz_no == '32' or quiz_no == '33':
        path = 'assets/yolov5/models/best_notes.pt'
    if quiz_no == '41' or quiz_no == '42' or quiz_no == '43' or quiz_no == '44':
        path = 'assets/yolov5/models/best_shapes.pt'

    print(path)

    result = detect(weights=path)
    print("result", result)

    return jsonify({"result": result, "status": 200}), 200
