package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.*;

@Getter @Setter
@RelationshipEntity(type = "LAN")
public class LinkRelation {
    @Id @GeneratedValue private Long id;
    @Property private String netType;
    @StartNode private XDeviceNode from;
    @EndNode private  XDeviceNode to;

    public LinkRelation(String netType, XDeviceNode from, XDeviceNode to) {
        this.netType = netType;
        this.from = from;
        this.to = to;
    }
}
