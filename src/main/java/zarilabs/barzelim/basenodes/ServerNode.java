package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

@Getter @Setter
@NodeEntity

public class ServerNode extends XDeviceNode {
    @Id @GeneratedValue private Long id;
    private String formFactor;
    private String externalStorage;

    public ServerNode(){
        super();
    }

    public ServerNode(String formFactor, String externalStorage) {
        this.formFactor = formFactor;
        this.externalStorage = externalStorage;
    }

    public ServerNode(String serialNumber, String name, String vendor, String osType, String osVersion, int rackNumber, String clusterName, int uNumber, String formFactor, String externalStorage,int size) {
        super(serialNumber, name, vendor, osType, osVersion, rackNumber, clusterName, uNumber,size);
        this.formFactor = formFactor;
        this.externalStorage = externalStorage;
    }
    @Relationship(type = "SAN")
    private StorageNode externalStorageNode;
    public void connectToSan(StorageNode storageNode){
        externalStorageNode = storageNode;
    }
    @Override
    public String toString() {
        return "ServerNode{" +
                "fromFactor='" + formFactor + '\'' +
                ", externalStorage='" + externalStorage + '\'' +
                '}';
    }
}
