import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from flask_jwt_extended import create_access_token

db = firestore.client()
ref = db.collection('user')

userAPI = Blueprint('userAPI', __name__)


@userAPI.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    query = ref.where('username', '==', username).limit(1)  # 'password': password})
    docs = query.get()
    all_records = []
    for doc in docs:
        all_records = doc.to_dict()
        all_records['id'] = doc.id
        print(all_records['username'])
        print(all_records['id'])
    print("name", all_records)

    if all_records:
        if username != all_records['username'] or password != all_records['password']:
            return jsonify({"msg": "Bad username or password"}), 401
    else:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    print(access_token)
    return jsonify({"access_token": access_token, "user_role": all_records['role'], "name": all_records['full_name'], "id": all_records["id"], "status": 200})


@userAPI.route('', methods=['POST'])
def create_user():
    try:
        id = uuid.uuid4()
        ref.document(id.hex).set(request.json)
        return jsonify({"msg": "User registration has been completed successfully and notified", "status": 200}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@userAPI.route('/<id>', methods=['GET'])
def get_item(id):
    user = ref.document(id).get()
    if user.exists:
        return jsonify(user.to_dict()), 200
    else:
        return jsonify({'error': 'User not found', "status": 200})


@userAPI.route('/<id>', methods=['PUT'])
def update_user(id):
    user = request.json
    ref.document(id).update(user)
    return jsonify({'message': 'User updated successfully', "status": 200})
