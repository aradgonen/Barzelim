from django.http import JsonResponse
from simplidc_backend.models import *
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def connectServerToLan(request):
    if request.method == 'PUT':
        json_data = json.loads(request.body)
        network_serialNUmber = json_data['network_serialNumber']
        server_serialNumber = json_data['server_serialNumber']
        try:
            server = Server.nodes.get(serialNumber=server_serialNumber)
            network = Network.nodes.get(serialNumber=network_serialNUmber)
            res = server.lan.connect(network)
            response = {"result": res}
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occurred"}
            return JsonResponse(response, safe=False)


@csrf_exempt
def connectServerToSan(request):
    if request.method == 'PUT':
        json_data = json.loads(request.body)
        storage_serialNumber = json_data['storage_serialNumber']
        server_serialNumber = json_data['server_serialNumber']
        try:
            server = Server.nodes.get(serialNumber=server_serialNumber)
            storage = Storage.nodes.get(serialNumber=storage_serialNumber)
            res = server.san.connect(storage)
            response = {"result": res}
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occurred"}
            return JsonResponse(response, safe=False)
@csrf_exempt
def putDeviceInRack(request):
    if request.method == 'PUT':
        json_data = json.loads(request.body)
        rack_name = json_data['rack_name']
        device_serialNumber = json_data['device_serialNumber']
        try:
            device = Device.nodes.get(serialNumber=device_serialNumber)
            rack = Rack.nodes.get(name=rack_name)
            res = device.rack.connect(rack)
            response = {"result": res}
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occurred"}
            return JsonResponse(response, safe=False)