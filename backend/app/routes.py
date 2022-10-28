from app import app
from app.controller import DosenController
from app.controller import UserController
from flask import request

@app.route('/')
def index():
    return 'Hello flask app'

@app.route('/dosen', methods=['GET', 'POST'])
def dosens():
    if request.method == 'GET':
        return DosenController.index()
    else:
        return DosenController.save()

@app.route('/dosen/<id>', methods=['GET', 'PUT', 'DELETE'])
def dosenDetail(id):
    if request.method == 'GET':
        return DosenController.detail(id)
    elif request.method == 'PUT':
        return DosenController.ubah(id)
    elif request.method == 'DELETE':
        return DosenController.hapus(id)

@app.route('/createadmin', methods=['POST'])
def admins():
    return UserController.buatAdmin()