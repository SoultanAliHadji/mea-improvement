from app.model.viewtable import Viewtable
from app import response, app, db
from flask import request
from sqlalchemy import desc

def index():
    try:
        view = Viewtable.query.all()
        data = formatData(view)
        
        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewLimit(num):
    try:
        view = Viewtable.query.order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)
        
        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewNotificationFilter(object, num):
    try:
        view = Viewtable.query.filter(Viewtable.type_object == object).order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)
        
        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewValidatedFilter(date, num):
    try:
        view = Viewtable.query.filter(((Viewtable.type_validation == "true") | (Viewtable.type_validation == "false")) & (Viewtable.updated_at.contains(date))).order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)
        
        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewTableFilter(name, location, object, date, num):
    try:
        view = Viewtable.query.filter(((Viewtable.type_validation == "true") | (Viewtable.type_validation == "false")) & (Viewtable.name == name) & (Viewtable.location == location) & (Viewtable.type_object == object) & (Viewtable.updated_at.contains(date))).order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewTableFilterWithoutDate(name, location, object, num):
    try:
        view = Viewtable.query.filter((Viewtable.name == name) & (Viewtable.location == location) & (Viewtable.type_object == object)).order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewTableFilterNameLocation(name, location, num):
    try:
        view = Viewtable.query.filter((Viewtable.name == name) & (Viewtable.location == location)).order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewTableFilterAllCctv(object, date, num):
    try:
        view = Viewtable.query.filter(((Viewtable.type_validation == "true") | (Viewtable.type_validation == "false")) & (Viewtable.type_object == object) & (Viewtable.updated_at.contains(date))).order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewTableFilterAllObject(name, location, date, num):
    try:
        view = Viewtable.query.filter(((Viewtable.type_validation == "true") | (Viewtable.type_validation == "false")) & (Viewtable.name == name) & (Viewtable.location == location) & (Viewtable.updated_at.contains(date))).order_by(desc(Viewtable.id)).limit(num)
        data = formatData(view)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def viewDetail(id):
    try:
        view = Viewtable.query.filter_by(id=id).first()

        if not view:
            return response.badRequest([], 'Tidak terdapat data deviasi yang dicari')

        data = formatDetail(view)
        
        return response.success(data, "Success")

    except Exception as e:
        print(e)

def formatData(datas):
    array = []
    
    for i in datas:
        array.append(viewIndexData(i))

    return array

def formatDetail(data):
    array = []
    
    array.append(viewIndexData(data))

    return array

def viewIndexData(data):
    data = {
        'id' : data.id,
        'realtime_images_id' : data.realtime_images_id,
        'user_id' : data.user_id,
        'type_validation' : data.type_validation,
        'type_object' : data.type_object,
        'violate_count' : data.violate_count,
        'comment' : data.comment,
        'created_at' : data.created_at,
        'updated_at' : data.updated_at,
        'image' : data.image,
        'cctv_id' : data.cctv_id,
        'name' : data.name,
        'location' : data.location,
        'ip' : data.ip,
        'username' : data.username,
        'user_name' : data.user_name
    }

    return data