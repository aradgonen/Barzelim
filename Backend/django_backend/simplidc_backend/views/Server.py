from django.http import JsonResponse
from simplidc_backend.models import Server
from django.views.decorators.csrf import csrf_exempt
import json

def getAllServer(request):
    if request.method == 'GET':
        try:
            servers = Server.nodes.all()
            response = []
            for server in servers:
                obj = {
                    "serialNumber" : server.serialNumber,
                    "name" : server.name,
                    "vendor": server.vendor,
                    "osType" : server.osType,
                    "osVersion" : server.osVersion,
                    "rackNumber" : server.rackNumber,
                    "clusterName" : server.clusterName,
                    "uNumber" : server.uNumber,
                    "size" : server.size,
                    "formFactor" : server.arrayType,
                    "externalStorage" : server.externalStorage
                }
                response.append(obj)
            return JsonResponse(response, safe=False)
        except:
            response = {"error":"Error occured"}
            return JsonResponse(response, safe=False)
@csrf_exempt
def serverDetails(request):
    if request.method == 'GET':
        # get one server by name
        serialNumber = request.GET.get('serialNumber',' ')
        try:
            server = Server.nodes.get(serialNumber=serialNumber)
            response = {
                    "serialNumber" : server.serialNumber,
                    "name" : server.name,
                    "vendor": server.vendor,
                    "osType" : server.osType,
                    "osVersion" : server.osVersion,
                    "rackNumber" : server.rackNumber,
                    "clusterName" : server.clusterName,
                    "uNumber" : server.uNumber,
                    "size" : server.size,
                    "formFactor" : server.formFactor,
                    "externalStorage" : server.externalStorage
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'POST':
        # create one server
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
        formFactor = json_data['formFactor']
        externalStorage = json_data['externalStorage']

        try:
            server = Server(serialNumber=serialNumber, name=name, vendor=vendor,osType=osType,osVersion=osVersion,rackNumber=rackNumber,clusterName=clusterName,uNumber=uNumber,size=size, formFactor=formFactor, externalStorage=externalStorage)
            server.save()
            response = {
                "id" : server.id
            }
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)
    if request.method == 'PUT':
        # update one server
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
        formFactor = json_data['formFactor']
        externalStorage = json_data['externalStorage']
        try:
            server = Server.nodes.get(serialNumber=serialNumber)
            server.name = name
            server.vendor = vendor
            server.osType = osType
            server.osVersion = osVersion
            server.rackNumber = rackNumber
            server.clusterName = clusterName
            server.uNumber = uNumber
            server.size = size
            server.formFactor = formFactor
            server.externalStorage = externalStorage
            server.save()
            response = {
                    "serialNumber" : server.serialNumber,
                    "name" : server.name,
                    "vendor": server.vendor,
                    "osType" : server.osType,
                    "osVersion" : server.osVersion,
                    "rackNumber" : server.rackNumber,
                    "clusterName" : server.clusterName,
                    "uNumber" : server.uNumber,
                    "size" : server.size,
                    "formFactor" : server.formFactor,
                    "externalStorage" : server.externalStorage
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'DELETE':
        # delete one server
        json_data = json.loads(request.body)
        serialNumber = json_data['serialMumber']
        try:
            server = Server.nodes.get(serialNumber=serialNumber)
            server.delete()
            response = {"success" : "Server Deleted"}
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)