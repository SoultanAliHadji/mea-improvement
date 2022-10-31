from app import app
from app.controller import CctvController, UsersController, Realtime_ImagesController, Realtime_DeviationsController
from flask import request

@app.route('/')
def index():
    return 'Hello flask app'

@app.route('/cctv', methods=['GET'])
def cctvs():
    return CctvController.index()

@app.route('/cctv/<id>', methods=['GET'])
def cctvdetail(id):
    return CctvController.detail(id)

@app.route('/user', methods=['GET'])
def users():
    return UsersController.index()

@app.route('/image', methods=['GET'])
def images():
    return Realtime_ImagesController.index()

@app.route('/image/<id>', methods=['GET'])
def deviationdetail(id):
    return Realtime_ImagesController.imagedetail(id)

@app.route('/deviation', methods=['GET'])
def deviations():
    return Realtime_DeviationsController.index()