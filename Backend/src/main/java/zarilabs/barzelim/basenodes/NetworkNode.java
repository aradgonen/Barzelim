package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

@Getter @Setter
@NodeEntity

public class NetworkNode extends XDeviceNode {

    @Id @GeneratedValue private Long id;
    private boolean isLayer2;
    private boolean isLayer3;

    private NetworkNode(){
        super();
    }
    public NetworkNode(boolean isLayer3, boolean isLayer2) {
        this.isLayer2 = isLayer2;
        this.isLayer3 = isLayer3;
    }

    public NetworkNode(String serialNumber, String name, String vendor, String osType, String osVersion, int rackNumber, String clusterName, int uNumber,  boolean isLayer3, boolean isLayer2,int size) {
        super(serialNumber, name, vendor, osType, osVersion, rackNumber, clusterName, uNumber,size);
        this.isLayer2 = isLayer2;
        this.isLayer3 = isLayer3;
    }

    @Override
    public String toString() {
        return "NetworkNode{" +
                "id=" + id +
                ", isLayer3=" + isLayer3 +
                ", isLayer2=" + isLayer2 +
                '}';
    }
}
