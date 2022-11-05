from app import app
from app.controller import CctvController, UsersController, Realtime_ImagesController, Realtime_DeviationsController, ViewTableController
from flask import request

@app.route('/')
def index():
    return 'Hello flask app'

@app.route('/cctv', methods=['GET'])
def cctvs():
    return CctvController.index()

@app.route('/cctvdetail/<id>', methods=['GET'])
def cctvDetail(id):
    return CctvController.cctvDetail(id)

@app.route('/cctv/<id>', methods=['GET'])
def cctvMostDetail(id):
    return CctvController.detail(id)

@app.route('/user', methods=['GET'])
def users():
    return UsersController.index()

@app.route('/image', methods=['GET'])
def images():
    return Realtime_ImagesController.index()

@app.route('/imagelimit/<num>', methods=['GET'])
def imageLimiter(num):
    return Realtime_ImagesController.imageLimit(num)

@app.route('/image/<id>', methods=['GET'])
def imageDetail(id):
    return Realtime_ImagesController.imageDetail(id)

@app.route('/deviation', methods=['GET'])
def deviations():
    return Realtime_DeviationsController.index()

@app.route('/deviation/<id>', methods=['GET'])
def deviationDetail(id):
    return Realtime_DeviationsController.detail(id)

@app.route('/view', methods=['GET'])
def view():
    return ViewTableController.index()

@app.route('/view/<id>', methods=['GET'])
def viewSingle(id):
    return ViewTableController.viewDetail(id)

@app.route('/viewlimit/<num>', methods=['GET'])
def viewLimited(num):
    return ViewTableController.viewLimit(num)