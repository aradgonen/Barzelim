package zarilabs.barzelim.baseobjects;

import javax.persistence.*;
import java.util.Arrays;

@Entity
public class Cluster {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @SequenceGenerator(name="cluster_generator", sequenceName = "car_seq", allocationSize=50)
    private Long id;
    private String[] members;
    private String clusterName;
    private int typeId;

    private Cluster() {}

    public Cluster(String[] members, String clusterName, int typeId) {
        this.members = members;
        this.clusterName = clusterName;
        this.typeId = typeId;
    }

    public String[] getMembers() {
        return members;
    }

    public void setMembers(String[] members) {
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
