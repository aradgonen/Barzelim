package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@Getter @Setter
@NodeEntity
public class XDeviceNode {
    @Id @GeneratedValue private Long id;
    private String serialNumber;
    private String name;
    private String vendor;
    private String osType;
    private String osVersion;
    private int rackNumber;
    private String clusterName;
    private int uNumber;
    private int size;

    protected XDeviceNode() {}

    public XDeviceNode(String serialNumber, String name, String vendor, String osType, String osVersion, int rackNumber, String clusterName, int uNumber, int size) {
        this.serialNumber = serialNumber;
        this.name = name;
        this.vendor = vendor;
        this.osType = osType;
        this.osVersion = osVersion;
        this.rackNumber = rackNumber;
        this.clusterName = clusterName;
        this.uNumber = uNumber;
        this.size = size;
    }

    @Override
    public String toString() {
        return "XDeviceNode{" +
                "serialNumber='" + serialNumber + '\'' +
                ", name='" + name + '\'' +
                ", vendor=" + vendor +
                ", osType=" + osType +
                ", osVersion=" + osVersion +
                ", rackNumber=" + rackNumber +
                ", clusterName='" + clusterName + '\'' +
                ", uNumber=" + uNumber +
                ", size=" + size +
                '}';
    }
}
