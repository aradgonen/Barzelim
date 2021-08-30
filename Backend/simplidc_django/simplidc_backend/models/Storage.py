from neomodel import StringProperty, IntegerProperty, RelationshipTo
from .Device import Device

class Storage(Device):
    arrayType = StringProperty(required=True)
    arrayProtocol = StringProperty(required=True)
    extraMgmtIps = StringProperty(required=True)

