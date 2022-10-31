from app.model.realtime_images import Realtime_images
from app.model.realtime_deviations import Realtime_deviations
from app import response, app, db
from flask import request

def index():
    try:
        image = Realtime_images.query.all()
        imagedata = formatarray(image)
        
        return response.success(imagedata, "Success")

    except Exception as e:
        print(e)

def formatarray(datas):
    array = []
    
    for i in datas:
        array.append(singleObject(i))

    return array

def singleObject(data):
    data = {
        'id' : data.id,
        'cctv_id' : data.cctv_id,
        'image' : data.image,
        'count_hd' : data.count_hd,
        'count_lv' : data.count_lv,
        'avg_panjang_bbox_hd' : data.avg_panjang_bbox_hd,
        'created_at' : data.created_at,
        'updated_at' : data.updated_at
    }

    return data

def imagedetail(id):
    try:
        image = Realtime_images.query.filter_by(id=id).first()
        deviations = Realtime_deviations.query.filter((Realtime_deviations.realtime_images_id == id))

        if not image:
            return response.badRequest([], 'Tidak ada data realtime image')

        deviationdata = formatDeviation(deviations)
        data = singleDetailObject(image, deviationdata)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def singleDetailObject(image, deviationdata):
    data = {
        'id' : image.id,
        'cctv_id' : image.cctv_id,
        'image' : image.image,
        'count_hd' : image.count_hd,
        'count_lv' : image.count_lv,
        'avg_panjang_bbox_hd' : image.avg_panjang_bbox_hd,
        'created_at' : image.created_at,
        'updated_at' : image.updated_at,
        'realtime_deviation' : deviationdata
    }

    return data

def singleDeviation(image):
    data = {
        'id' : image.id,
        'user_id' : image.user_id,
        'type_validation' : image.type_validation,
        'type_object' : image.type_object,
        'violate_count' : image.violate_count,
        'comment' : image.comment,
        'created_at' : image.created_at,
        'updated_at' : image.updated_at
    }

    return data

def formatDeviation(data):
    array = []
    for i in data:
        array.append(singleDeviation(i))
    
    return array