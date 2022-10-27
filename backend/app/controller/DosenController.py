from importlib.metadata import requires
from shutil import ExecError
from app.model.dosen import Dosen
from app.model.mahasiswa import Mahasiswa
from app import response, app, db
from flask import request

def read():
    try:
        dosen = Dosen.query.all()
        data = formatArray(dosen)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def formatArray(datas):
    array = []

    for i in datas:
        array.append(singleObject(i))

    return array

def singleObject(data):
    data = {
        'id' : data.id,
        'nidn' : data.nidn,
        'nama' : data.nama,
        'phone' : data.phone,
        'alamat' : data.alamat
    }

    return data

def readById(id):
    try:
        dosen = Dosen.query.filter_by(id=id).first()
        mahasiswa = Mahasiswa.query.filter((Mahasiswa.dosen_satu == id) | (Mahasiswa.dosen_dua == id))

        if not dosen:
            return response.badRequest([], 'Data dosen tidak ada')

        datamahasiswa = formatMahasiswa(mahasiswa)

        data = singleDetailMahasiswa(dosen, datamahasiswa)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def singleDetailMahasiswa(dosen, mahasiswa):
    data = {
        'id' : dosen.id,
        'nidn' : dosen.nidn,
        'nama' : dosen.nama,
        'phone' : dosen.phone,
        'mahasiswa' : mahasiswa
    }

    return data

def singleMahasiswa(mahasiswa):
    data = {
        'id' : mahasiswa.id,
        'nim' : mahasiswa.nim,
        'nama' : mahasiswa.nama,
        'phone' : mahasiswa.phone
    }

    return data

def formatMahasiswa(data):
    array = []
    for i in data:
        array.append(singleMahasiswa(i))

    return array

def create():
    try:
        nidn = request.form.get('nidn')
        nama = request.form.get('nama')
        phone = request.form.get('phone')
        alamat = request.form.get('alamat')

        dosens = Dosen(nidn=nidn, nama=nama, phone=phone, alamat=alamat)
        db.session.add(dosens)
        db.session.commit()

        return response.success('', 'Sukses menambahkan data dosen')
        
    except Exception as e:
        print(e)

def update(id):
    try:
        nidn = request.form.get('nidn')
        nama = request.form.get('nama')
        phone = request.form.get('phone')
        alamat = request.form.get('alamat')

        input = [
            {
                'nidn' : nidn,
                'nama' : nama,
                'phone' : phone,
                'alamat' : alamat
            }
        ]

        dosen = Dosen.query.filter_by(id=id).first()

        dosen.nidn = nidn
        dosen.nama = nama
        dosen.phone = phone
        dosen.alamat = alamat

        db.session.commit()

        return response.success(input, 'Sukses update data')
        
    except Exception as e:
        print(e)

def delete(id):
    try:
        dosen = Dosen.query.filter_by(id=id).first()
        if not dosen:
            return response.badRequest([], 'Data dosen kosong')

        db.session.delete(dosen)
        db.session.commit()

        return response.success('', 'Berhasil menghapus data')

    except Exception as e:
        print(e)