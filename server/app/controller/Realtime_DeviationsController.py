from app.model.realtime_deviations import Realtime_deviations
from app import response, app, db
from flask import request

def index():
    try:
        deviation = Realtime_deviations.query.all()
        data = formatarray(deviation)
        
        return response.success(data, "Success")

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
        'realtime_images_id' : data.realtime_images_id,
        'user_id' : data.user_id,
        'type_validation' : data.type_validation,
        'type_object' : data.type_object,
        'violate_count' : data.violate_count,
        'comment' : data.comment,
        'created_at' : data.created_at,
        'updated_at' : data.updated_at
    }

    return data