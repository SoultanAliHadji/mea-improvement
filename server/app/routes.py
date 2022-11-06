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
def viewLimited(num):
    return ViewTableController.viewLimit(num)

@app.route('/viewobject/<object>/<num>', methods=['GET'])
def viewNotificationFilter(object, num):
    return ViewTableController.viewNotificationFilter(object, num)

@app.route('/viewvalidated/<num>', methods=['GET'])
def viewValidatedFilter(num):
    return ViewTableController.viewValidatedFilter(num)

@app.route('/viewtable/<name>/<location>/<object>/<num>', methods=['GET'])
def viewTableFilter(name, location, object, num):
    return ViewTableController.viewTableFilter(name, location, object, num)

@app.route('/viewtable/<object>/<num>', methods=['GET'])
def viewTableFilterAllCctv(object, num):
    return ViewTableController.viewTableFilterAllCctv(object, num)

@app.route('/viewtable/<name>/<location>/<num>', methods=['GET'])
def viewTableFilterAllObject(name, location, num):
    return ViewTableController.viewTableFilterAllObject(name, location, num)

@app.route('/viewtablet/<datetime>/<num>', methods=['GET'])
def viewTableFilterAllDatetime(datetime, num):
    return ViewTableController.viewTableFilterAllDatetime(datetime, num)