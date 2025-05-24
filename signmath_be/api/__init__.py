from flask import Flask
from firebase_admin import credentials, initialize_app
from flask_cors import CORS
from flask_jwt_extended import JWTManager

cred = credentials.Certificate("api/key.json")
default_app = initialize_app(cred)

def create_app():
    app = Flask(__name__)
    app.config['JWT_SECRET_KEY'] = 'tyw35gy5hb4c5gjh53om3dfj6e'
    jwt = JWTManager(app)
    CORS(app, origins=["*"])

    from .quizAPI import quizAPI
    app.register_blueprint(quizAPI, url_prefix='/api/quiz')

    from .lessonsAPI import lessonsAPI
    app.register_blueprint(lessonsAPI, url_prefix='/api/lessons')

    from .userAPI import userAPI
    app.register_blueprint(userAPI, url_prefix='/api/user')

    from .processAPI import processAPI
    app.register_blueprint(processAPI, url_prefix='/api/process')

    return app
