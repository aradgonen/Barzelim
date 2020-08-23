package zarilabs.barzelim.baseobjects;

import java.util.Arrays;

public class Cluster {
    private Device[] members;
    private String clusterName;
    private int typeId;

    public Cluster(Device[] members, String clusterName, int typeId) {
        this.members = members;
        this.clusterName = clusterName;
        this.typeId = typeId;
    }

    public Device[] getMembers() {
        return members;
    }

    public void setMembers(Device[] members) {
        this.members = members;
    }

    public String getClusterName() {
        return clusterName;
    }

    public void setClusterName(String clusterName) {
        this.clusterName = clusterName;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    @Override
    public String toString() {
        return "Cluster{" +
                "members=" + Arrays.toString(members) +
                ", clusterName='" + clusterName + '\'' +
                ", typeId=" + typeId +
                '}';
    }
}
