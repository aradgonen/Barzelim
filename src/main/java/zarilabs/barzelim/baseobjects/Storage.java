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
//public class Storage extends Device {
//    private int arrayTypeId;
//    private int arrayProtocolId;
//    private String extramgmtIps;
//
//    private Storage(){
//        super();
//    }
//
//    public Storage(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int rack_number, int uNumber, int arrayTypeId, int arrayProtocolId, String extramgmtIps) {
//        super(serialNumber, name, vendorId, osTypeId, osVersionId, rack_number, uNumber);
//        this.arrayTypeId = arrayTypeId;
//        this.arrayProtocolId = arrayProtocolId;
//        this.extramgmtIps = extramgmtIps;
//    }
//
//    @Override
//    public String toString() {
//        return "Storage{" +
//                "arrayTypeId=" + arrayTypeId +
//                ", arrayProtocolId=" + arrayProtocolId +
//                ", extramgmtIps='" + extramgmtIps + '\'' +
//                '}';
//    }
//}
