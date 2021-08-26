from django.http import JsonResponse
from simplidc_backend.models import Rack
from django.views.decorators.csrf import csrf_exempt
import json

def getAllRacks(request):
    if request.method == 'GET':
        try:
            racks = Rack.nodes.all()
            response = []
            for rack in racks:
                obj = {
                    "name": rack.name,
                    "networkId": rack.networkId,
                    "size": rack.size,
                }
                response.append(obj)
            return JsonResponse(response, safe=False)
        except:
            response = {"error":"Error occured"}
            return JsonResponse(response, safe=False)
@csrf_exempt
def rackDetails(request):
    if request.method == 'GET':
        # get one rack by name
        name = request.GET.get('name',' ')
        try:
            rack = Rack.nodes.get(name=name)
            response = {
                "name": rack.name,
                "networkId": rack.networkId,
                "size": rack.size,
            }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'POST':
        # create one rack
        json_data = json.loads(request.body)
        name = json_data['name']
        networkId = json_data['networkId']
        size = json_data['size']
        try:
            rack = Rack(name=name,networkId=networkId,size=size)
            rack.save()
            response = {
                "id" : rack.id
            }
            return JsonResponse(response)
        except Exception as e:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)
    if request.method == 'PUT':
        # update one rack
        json_data = json.loads(request.body)
        name = json_data['name']
        networkId = json_data['networkId']
        size = json_data['size']
        try:
            rack = Rack.nodes.get(name=name)
            rack.networkId = networkId
            rack.save()
            response = {
                "name": rack.name,
                "networkId": rack.networkId,
                "size": rack.size,
            }
            return JsonResponse(response, safe=False)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)

    if request.method == 'DELETE':
        # delete one rack
        json_data = json.loads(request.body)
        name = json_data['name']
        try:
            rack = Rack.nodes.get(name=name)
            rack.delete()
            response = {"success" : "Rack Deleted"}
            return JsonResponse(response)
        except:
            response = {"error": "Error occured"}
            return JsonResponse(response, safe=False)