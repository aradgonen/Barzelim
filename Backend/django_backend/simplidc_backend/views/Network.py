from django.http import JsonResponse
from simplidc_backend.models import Network
from django.views.decorators.csrf import csrf_exempt
import json

def getAllNetwork(request):
    if request.method == 'GET':
        try:
            networks = Network.nodes.all()
            response = []
            for network in networks:
                obj = {
                    "serialNumber" : network.serialNumber,
                    "name" : network.name,
                    "vendor": network.vendor,
                    "osType" : network.osType,
                    "osVersion" : network.osVersion,
                    "rackNumber" : network.rackNumber,
                    "clusterName" : network.clusterName,
                    "uNumber" : network.uNumber,
                    "size" : network.size,
                    "isLayer2" : network.isLayer2,
                    "isLayer3" : network.isLayer3
                }
                response.append(obj)
            return JsonResponse(response, safe=False)
        except:
            response = {"error":"Error occured"}
            return JsonResponse(response, safe=False)
@csrf_exempt
def networkDetails(request):
    if request.method == 'GET':
        # get one network by name
        serialNumber = request.GET.get('serialNumber',' ')
        try:
            network = Network.nodes.get(serialNumber=serialNumber)
            response = {
                    "serialNumber" : network.serialNumber,
                    "name" : network.name,
                    "vendor": network.vendor,
                    "osType" : network.osType,
                    "osVersion" : network.osVersion,
                    "rackNumber" : network.rackNumber,
                    "clusterName" : network.clusterName,
                    "uNumber" : network.uNumber,
                    "size" : network.size,
                    "isLayer2" : network.isLayer2,
                    "isLayer3" : network.isLayer3
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'POST':
        # create one network
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
        isLayer2 = json_data['isLayer2']
        isLayer3 = json_data['isLayer3']

        try:
            network = Network(serialNumber=serialNumber, name=name, vendor=vendor,osType=osType,osVersion=osVersion,rackNumber=rackNumber,clusterName=clusterName,uNumber=uNumber,size=size, isLayer2=isLayer2, isLayer3=isLayer3)
            network.save()
            response = {
                "id" : network.id
            }
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)
    if request.method == 'PUT':
        # update one network
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
        isLayer2 = json_data['isLayer2']
        isLayer3 = json_data['isLayer3']
        try:
            network = Network.nodes.get(serialNumber=serialNumber)
            network.name = name
            network.vendor = vendor
            network.osType = osType
            network.osVersion = osVersion
            network.rackNumber = rackNumber
            network.clusterName = clusterName
            network.uNumber = uNumber
            network.size = size
            network.isLayer2 = isLayer2
            network.isLayer3 = isLayer3
            network.save()
            response = {
                    "serialNumber" : network.serialNumber,
                    "name" : network.name,
                    "vendor": network.vendor,
                    "osType" : network.osType,
                    "osVersion" : network.osVersion,
                    "rackNumber" : network.rackNumber,
                    "clusterName" : network.clusterName,
                    "uNumber" : network.uNumber,
                    "size" : network.size,
                    "isLayer2" : network.isLayer2,
                    "isLayer3" : network.isLayer3
                }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'DELETE':
        # delete one network
        json_data = json.loads(request.body)
        serialNumber = json_data['serialMumber']
        try:
            network = Network.nodes.get(serialNumber=serialNumber)
            network.delete()
            response = {"success" : "Network Deleted"}
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)