package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@Getter @Setter
@NodeEntity

public class StorageNode extends DeviceNode {

    private String arrayType;
    private String arrayProtocol;
    private String extramgmtIps;

    private StorageNode(){
        super();
    }

    public StorageNode(String arrayType, String arrayProtocol, String extramgmtIps) {
        this.arrayType = arrayType;
        this.arrayProtocol = arrayProtocol;
        this.extramgmtIps = extramgmtIps;
    }

    public StorageNode(String serialNumber, String name, String vendor, String osType, String osVersion, int rackNumber, String clusterName, int uNumber, String arrayType, String arrayProtocol, String extramgmtIps) {
        super(serialNumber, name, vendor, osType, osVersion, rackNumber, clusterName, uNumber);
        this.arrayType = arrayType;
        this.arrayProtocol = arrayProtocol;
        this.extramgmtIps = extramgmtIps;
    }

    @Override
    public String toString() {
        return "StorageNode{" +
                "arrayType='" + arrayType + '\'' +
                ", arrayProtocol='" + arrayProtocol + '\'' +
                ", extramgmtIps='" + extramgmtIps + '\'' +
                '}';
    }
}
