from app import response

def Refresh():
    try:
        change = ""
        return response.success(change, "Success")
    except Exception as e:
        print(e)
