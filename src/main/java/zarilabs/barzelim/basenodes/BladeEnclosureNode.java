package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.Set;

@Getter
@Setter
@NodeEntity
public class BladeEnclosureNode extends XDeviceNode {

    private int numberOfServers;
    @Relationship(type = "InEnclosure", direction = Relationship.INCOMING)
    private ServerNode[] serverNodes;
    private String enclosureType;

    private BladeEnclosureNode() {super();}

    public BladeEnclosureNode(String serialNumber, String name, String vendor, String osType, String osVersion, int rackNumber, String clusterName, int uNumber, int size, int numberOfServers, String enclosureType) {
        super(serialNumber, name, vendor, osType, osVersion, rackNumber, clusterName, uNumber, size);
        this.numberOfServers = numberOfServers;
        this.enclosureType = enclosureType;

        serverNodes = new ServerNode[this.numberOfServers];
        for (int serverIndex = 0; serverIndex < this.numberOfServers; serverIndex++) {
            serverNodes[serverIndex] = new ServerNode();
        }
    }

    public void insertServerIntoEnclosure(ServerNode serverNode, int location) {
        if (serverNode.getFormFactor().equals("Blade")) {
            this.serverNodes[location - 1] = serverNode;
        }
    }

}
