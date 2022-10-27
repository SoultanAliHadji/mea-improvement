from urllib import request
from app import app
from app.controller import DosenController
from app.controller import UserController
from flask import request

@app.route('/')
def index():
    return 'Hello Flask App'

@app.route('/dosen', methods=['GET', 'POST'])
def dosens():
    if request.method == 'GET':
        return DosenController.read()
    else:
        return DosenController.create()

@app.route('/dosen/<id>', methods=['GET', 'PUT', 'DELETE'])
def dosenDetail(id):
    if request.method == 'GET':
        return DosenController.readById(id)
    elif request.method == 'PUT':
        return DosenController.update(id)
    elif request.method == 'DELETE':
        return DosenController.delete(id)

@app.route('/createadmin', methods=['POST'])
def admins():
    return UserController.createAdmin()

@app.route('/login', methods=['POST'])
def logins():
    return UserController.login()