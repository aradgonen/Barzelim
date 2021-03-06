package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;


import java.util.HashSet;
import java.util.Set;

@Getter @Setter
@NodeEntity
public class RackNode {
    @Id @GeneratedValue private Long id;
    private Integer name;
    private String networkId;
    private int size;

    protected RackNode() {}

    public RackNode(Integer rackNumber, String networkId, int size) {
        this.name = rackNumber;
        this.networkId = networkId;
        this.size = size;
    }

    @Relationship(type = "IN", direction = Relationship.INCOMING)
    private Set<XDeviceNode> content;

    public void putInRack(XDeviceNode XDeviceNode){
        if(content == null){
            content = new HashSet<>();
        }
        content.add(XDeviceNode);
    }

    @Override
    public String toString() {
        return "RackNode{" +
                "id=" + id +
                ", name=" + name +
                ", networkId='" + networkId + '\'' +
                ", size=" + size +
                ", content=" + content +
                '}';
    }
}
