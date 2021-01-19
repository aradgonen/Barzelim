//package zarilabs.barzelim.baseobjects;
//
//import lombok.Getter;
//import lombok.Setter;
//
//import javax.persistence.*;
//
//@Getter @Setter
//@Entity
//@Inheritance( strategy = InheritanceType.JOINED )
//public class Device {
//    private @Id String serialNumber;
//    private String name;
//    private int vendorId;
//    private int osTypeId;
//    private int osVersionId;
//    private int rack_number;
//    private String cluster_name;
//    private int uNumber;
//
//    protected Device() {}
//
//    public Device(String serialNumber,String name, int vendorId, int osTypeId, int osVersionId, int rack_number, int uNumber) {
//        this.serialNumber = serialNumber;
//        this.name = name;
//        this.vendorId = vendorId;
//        this.osTypeId = osTypeId;
//        this.osVersionId = osVersionId;
//        this.rack_number = rack_number;
//        this.uNumber = uNumber;
//    }
//}
