from neomodel import StructuredNode, StringProperty, IntegerProperty,UniqueIdProperty, RelationshipTo

class Rack(StructuredNode):
    name = StringProperty(unique_index=True, required=True)
    networkId = IntegerProperty(required=True)
    size = IntegerProperty(required=True)