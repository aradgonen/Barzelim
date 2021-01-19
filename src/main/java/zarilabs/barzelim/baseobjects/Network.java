//package zarilabs.barzelim.baseobjects;
//
//import javax.persistence.Entity;
//import javax.persistence.Inheritance;
//import javax.persistence.InheritanceType;
//import lombok.Getter;
//import lombok.Setter;
//@Getter @Setter
//@Entity
//@Inheritance( strategy = InheritanceType.JOINED )
//public class Network extends Device {
//    private boolean isLayer3;
//    private boolean isLayer2;
//    private Network() {
//        super();
//    }
//
//
//    public Network(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int rack_number, int uNumber, boolean isLayer3, boolean isLayer2) {
//        super(serialNumber, name, vendorId, osTypeId, osVersionId, rack_number, uNumber);
//        this.isLayer3 = isLayer3;
//        this.isLayer2 = isLayer2;
//    }
//
//    @Override
//    public String toString() {
//        return "Network{" +
//                "isLayer3=" + isLayer3 +
//                ", isLayer2=" + isLayer2 +
//                '}';
//    }
//}
