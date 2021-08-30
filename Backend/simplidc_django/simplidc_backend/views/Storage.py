from django.http import JsonResponse
from simplidc_backend.models import Storage
from django.views.decorators.csrf import csrf_exempt
import json

def getAllStorage(request):
    if request.method == 'GET':
        try:
            storages = Storage.nodes.all()
            response = []
            for storage in storages:
                obj = {
                    "serialNumber" : storage.serialNumber,
                    "name" : storage.name,
                    "vendor": storage.vendor,
                    "osType" : storage.osType,
                    "osVersion" : storage.osVersion,
                    "rackNumber" : storage.rackNumber,
                    "clusterName" : storage.clusterName,
                    "uNumber" : storage.uNumber,
                    "size" : storage.size,
                    "arrayType" : storage.arrayType,
                    "arrayProtocol" : storage.arrayProtocol,
                    "extraMgmtIps" : storage.extraMgmtIps
                }
                response.append(obj)
            return JsonResponse(response, safe=False)
        except:
            response = {"error":"Error occured"}
            return JsonResponse(response, safe=False)
@csrf_exempt
def storageDetails(request):
    if request.method == 'GET':
        # get one storage by name
        serialNumber = request.GET.get('serialNumber',' ')
        try:
            storage = Storage.nodes.get(serialNumber=serialNumber)
            response = {
                    "serialNumber" : storage.serialNumber,
                    "name" : storage.name,
                    "vendor": storage.vendor,
                    "osType" : storage.osType,
                    "osVersion" : storage.osVersion,
                    "rackNumber" : storage.rackNumber,
                    "clusterName" : storage.clusterName,
                    "uNumber" : storage.uNumber,
                    "size" : storage.size,
                    "arrayType" : storage.arrayType,
                    "arrayProtocol" : storage.arrayProtocol,
                    "extraMgmtIps" : storage.extraMgmtIps
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'POST':
        # create one storage
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
        arrayType = json_data['arrayType']
        arrayProtocol = json_data['arrayProtocol']
        extraMgmtIps = json_data['extraMgmtIps']

        try:
            storage = Storage(serialNumber=serialNumber, name=name, vendor=vendor,osType=osType,osVersion=osVersion,rackNumber=rackNumber,clusterName=clusterName,uNumber=uNumber,size=size, arrayType=arrayType, arrayProtocol=arrayProtocol, extraMgmtIps=extraMgmtIps)
            storage.save()
            response = {
                "id" : storage.id
            }
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)
    if request.method == 'PUT':
        # update one storage
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
        arrayType = json_data['arrayType']
        arrayProtocol = json_data['arrayProtocol']
        extraMgmtIps = json_data['extraMgmtIps']
        try:
            storage = Storage.nodes.get(serialNumber=serialNumber)
            storage.name = name
            storage.vendor = vendor
            storage.osType = osType
            storage.osVersion = osVersion
            storage.rackNumber = rackNumber
            storage.clusterName = clusterName
            storage.uNumber = uNumber
            storage.size = size
            storage.arrayType = arrayType
            storage.arrayProtocol = arrayProtocol
            storage.extraMgmtIps = extraMgmtIps
            storage.save()
            response = {
                    "serialNumber" : storage.serialNumber,
                    "name" : storage.name,
                    "vendor": storage.vendor,
                    "osType" : storage.osType,
                    "osVersion" : storage.osVersion,
                    "rackNumber" : storage.rackNumber,
                    "clusterName" : storage.clusterName,
                    "uNumber" : storage.uNumber,
                    "size" : storage.size,
                    "arrayType" : storage.arrayType,
                    "arrayProtocol" : storage.arrayProtocol,
                    "extraMgmtIps" : storage.extraMgmtIps
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'DELETE':
        # delete one storage
        json_data = json.loads(request.body)
        serialNumber = json_data['serialMumber']
        try:
            storage = Storage.nodes.get(serialNumber=serialNumber)
            storage.delete()
            response = {"success" : "Storage Deleted"}
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)