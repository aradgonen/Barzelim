from neomodel import StructuredNode, StringProperty, IntegerProperty, UniqueIdProperty, RelationshipTo
from .Rack import Rack


class Device(StructuredNode):
    serialNumber = StringProperty(unique_index=True, required=True)
    name = StringProperty(required=True)
    vendor = StringProperty(required=True)
    osType = StringProperty(required=True)
    osVersion = StringProperty(required=True)
    clusterName = StringProperty(required=True)
    rackNumber = IntegerProperty(required=True)
    uNumber = IntegerProperty(required=True)
    size = IntegerProperty(required=True)
    # Relations:
    rack = RelationshipTo(Rack, "IN")
