from neomodel import StringProperty, IntegerProperty, RelationshipTo
from .Device import Device
from .Storage import Storage
from .Network import Network
class Server(Device):
    formFactor = StringProperty(required=True)
    externalStorage = StringProperty(required=True)
    #Relations:
    san = RelationshipTo(Storage, "SAN")
    lan = RelationshipTo(Network, "LAN")
