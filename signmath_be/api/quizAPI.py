import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from flask_jwt_extended import create_access_token

db = firestore.client()
ref = db.collection('quiz')

quizAPI = Blueprint('quizAPI', __name__)

@quizAPI.route('', methods=['POST'])
def create_record():
    try:
        _id = uuid.uuid4()
        ref.document(_id.hex).set(request.json)
        return jsonify({"msg": "Record created successfully", "status": 200}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@quizAPI.route('', methods=['GET'])
# @jwt_required
def get_record():
    data = []
    try:
        docs = ref.get()
        for doc in docs:
            all_records = doc.to_dict()
            all_records['id'] = doc.id
            data.append(all_records)
        return jsonify({"data": data, "status": 200}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@quizAPI.route('/filter', methods=['GET'])
# @jwt_required
def filter_records():
    data = []
    try:
        filter_value = request.args.get('type')
        docs = ref.where("type", "==", filter_value).get()
        print(docs)

        for doc in docs:
            all_records = doc.to_dict()
            all_records['id'] = doc.id
            data.append(all_records)
        return jsonify({"data": data, "status": 200}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@quizAPI.route('/<id>', methods=['GET'])
def get_item(id):
    record = ref.document(id).get()
    if record.exists:
        return jsonify({"data":record.to_dict(),  "status": 200}), 200
    else:
        return jsonify({'error': 'Record not found'})
