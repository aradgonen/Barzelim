from django.conf.urls import url
from .views.Device import *
from .views.Storage import *
from .views.Network import *
from .views.Server import *
from .views.Rack import *
from .views.Connectors import *
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
    path('putDeviceInRack',putDeviceInRack),
    path('rack/<int:id>',getRack)
]