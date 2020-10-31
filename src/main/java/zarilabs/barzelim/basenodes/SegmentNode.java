//package zarilabs.barzelim.basenodes;
//
//import lombok.Getter;
//import lombok.Setter;
//
//import org.neo4j.ogm.annotation.GeneratedValue;
//import org.neo4j.ogm.annotation.Id;
//import org.neo4j.ogm.annotation.NodeEntity;
//
//@Getter @Setter
//@NodeEntity
//public class SegmentNode {
//    @Id @GeneratedValue private Long id;
//    private String ipaddress;
//    private int[] vlans;
//
//    protected SegmentNode() {}
//
//    public SegmentNode(String ipaddress, int[] vlans) {
//        this.ipaddress = ipaddress;
//        this.vlans = vlans;
//    }
//
//}
