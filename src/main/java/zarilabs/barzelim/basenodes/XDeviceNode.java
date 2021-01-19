package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
//import org.neo4j.ogm.annotation.Relationship;
//
//import javax.persistence.Entity;
//
//import javax.persistence.Inheritance;
//import javax.persistence.InheritanceType;

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

    protected XDeviceNode() {}

    public XDeviceNode(String serialNumber, String name, String vendor, String osType, String osVersion, int rackNumber, String clusterName, int uNumber) {
        this.serialNumber = serialNumber;
        this.name = name;
        this.vendor = vendor;
        this.osType = osType;
        this.osVersion = osVersion;
        this.rackNumber = rackNumber;
        this.clusterName = clusterName;
        this.uNumber = uNumber;
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
                '}';
    }
}
