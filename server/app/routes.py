from app import app
from app.controller import CctvController, UsersController, Realtime_ImagesController, Realtime_DeviationsController, ViewTableController, RefreshController
from flask import request


@app.route('/')
def index():
    return 'Hello flask app'


@app.route('/cctv', methods=['GET'])
def cctvs():
    return CctvController.index()


@app.route('/cctvdetail/<id>', methods=['GET'])
def cctvDetail(id):
    return CctvController.detail(id)


@app.route('/cctv/<id>', methods=['GET'])
def cctvMostDetail(id):
    return CctvController.detail(id)


@app.route('/user', methods=['GET'])
def users():
    return UsersController.index()


@app.route('/user/<username>', methods=['GET'])
def userDetail(username):
    return UsersController.detail(username)


@app.route('/image', methods=['GET'])
def images():
    return Realtime_ImagesController.index()


@app.route('/image/<id>', methods=['GET'])
def imageDetail(id):
    return Realtime_ImagesController.imageDetail(id)


@app.route('/deviation', methods=['GET'])
def deviations():
    return Realtime_DeviationsController.index()


@app.route('/deviation/<id>', methods=['GET', 'PUT'])
def deviationDetail(id):
    if request.method == 'GET':
        return Realtime_DeviationsController.detail(id)
    elif request.method == 'PUT':
        return Realtime_DeviationsController.update(id)


@app.route('/view', methods=['GET'])
def view():
    return ViewTableController.index()


@app.route('/view/<id>', methods=['GET'])
def viewSingle(id):
    return ViewTableController.viewDetail(id)


@app.route('/viewlimit/<num>', methods=['GET'])
def viewLimit(num):
    return ViewTableController.viewLimit(num)


@app.route('/viewtable/<name>/<location>/<object>/<date>/<validation>/<num>', methods=['GET'])
def viewTableFilter(name, location, object, date, validation, num):
    return ViewTableController.viewTableFilter(name, location, object, date, validation, num)

@app.route('/refresh', methods=['GET'])
def Refresh():
    return RefreshController.Refresh()