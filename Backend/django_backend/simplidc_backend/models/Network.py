from neomodel import BooleanProperty
from .Device import Device

class Network(Device):
    isLayer2 = BooleanProperty(required=True)
    isLayer3 = BooleanProperty(required=True)

