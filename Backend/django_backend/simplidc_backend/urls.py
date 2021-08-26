from django.conf.urls import url
from simplidc_backend.views.Device import *
from simplidc_backend.views.Storage import *
from simplidc_backend.views.Network import *
from simplidc_backend.views.Server import *
from simplidc_backend.views.Rack import *
from simplidc_backend.views.Connectors import *
from django.urls import path
urlpatterns = [
    path('device',deviceDetails),
    path('rack',rackDetails),
    path('storage',storageDetails),
    path('server',serverDetails),
    path('network',networkDetails),
    path('getAllDevices',getAllDevice),
    path('getAllStorages',getAllStorage),
    path('getAllServers',getAllServer),
    path('getAllNetworks',getAllNetwork),
    path('getAllRacks',getAllRacks),
    path('connectToSan',connectServerToSan),
    path('connectToLan',connectServerToLan),
    path('putDeviceInRack',putDeviceInRack)
]