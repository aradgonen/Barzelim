from django.http import JsonResponse
from simplidc_backend.models import Device
from django.views.decorators.csrf import csrf_exempt
import json

def getAllDevice(request):
    if request.method == 'GET':
        try:
            devices = Device.nodes.all()
            response = []
            for device in devices:
                obj = {
                    "serialNumber" : device.serialNumber,
                    "name" : device.name,
                    "vendor": device.vendor,
                    "osType" : device.osType,
                    "osVersion" : device.osVersion,
                    "rackNumber" : device.rackNumber,
                    "clusterName" : device.clusterName,
                    "uNumber" : device.uNumber,
                    "size" : device.size
                }
                response.append(obj)
            return JsonResponse(response, safe=False)
        except:
            response = {"error":"Error occured"}
            return JsonResponse(response, safe=False)
@csrf_exempt
def deviceDetails(request):
    if request.method == 'GET':
        # get one device by name
        serialNumber = request.GET.get('serialNumber',' ')
        try:
            device = Device.nodes.get(serialNumber=serialNumber)
            response = {
                    "serialNumber" : device.serialNumber,
                    "name" : device.name,
                    "vendor": device.vendor,
                    "osType" : device.osType,
                    "osVersion" : device.osVersion,
                    "rackNumber" : device.rackNumber,
                    "clusterName" : device.clusterName,
                    "uNumber" : device.uNumber,
                    "size" : device.size
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'POST':
        # create one rack
        json_data = json.loads(request.body)
        serialNumber = json_data['serialNumber']
        name = json_data['name']
        vendor = json_data['vendor']
        osType = json_data['osType']
        osVersion = json_data['osVersion']
        rackNumber = json_data['rackNumber']
        clusterName = json_data['clusterName']
        uNumber = json_data['uNumber']
        size = json_data['size']

        try:
            device = Device(serialNumber=serialNumber, name=name, vendor=vendor,osType=osType,osVersion=osVersion,rackNumber=rackNumber,clusterName=clusterName,uNumber=uNumber,size=size)
            device.save()
            response = {
                "id" : device.id
            }
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)
    if request.method == 'PUT':
        # update one rack
        json_data = json.loads(request.body)
        serialNumber = json_data['serialNumber']
        name = json_data['name']
        vendor = json_data['vendor']
        osType = json_data['osType']
        osVersion = json_data['osVersion']
        rackNumber = json_data['rackNumber']
        clusterName = json_data['clusterName']
        uNumber = json_data['uNumber']
        size = json_data['size']
        try:
            device = Device.nodes.get(serialNumber=serialNumber)
            device.name = name
            device.vendor = vendor
            device.osType = osType
            device.osVersion = osVersion
            device.rackNumber = rackNumber
            device.clusterName = clusterName
            device.uNumber = uNumber
            device.size = size
            device.save()
            response = {
                    "serialNumber" : device.serialNumber,
                    "name" : device.name,
                    "vendor": device.vendor,
                    "osType" : device.osType,
                    "osVersion" : device.osVersion,
                    "rackNumber" : device.rackNumber,
                    "clusterName" : device.clusterName,
                    "uNumber" : device.uNumber,
                    "size" : device.size
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'DELETE':
        # delete one rack
        json_data = json.loads(request.body)
        serialNumber = json_data['serialMumber']
        try:
            device = Device.nodes.get(serialNumber=serialNumber)
            device.delete()
            response = {"success" : "Device Deleted"}
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)