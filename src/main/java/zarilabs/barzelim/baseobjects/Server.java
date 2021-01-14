//package zarilabs.barzelim.baseobjects;
//
//import javax.persistence.Entity;
//import javax.persistence.PrimaryKeyJoinColumn;
//import lombok.Getter;
//import lombok.Setter;
//@Getter @Setter
//@Entity
//@PrimaryKeyJoinColumn(referencedColumnName="serialNumber")
//public class Server extends Device{
//    private int fromFactorID;
//    private String externalStorage;
//
//    private Server(){
//        super();
//    }
//
//
//    public Server(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int rack_number, int uNumber, int fromFactorID, String externalStorage) {
//        super(serialNumber, name, vendorId, osTypeId, osVersionId, rack_number, uNumber);
//        this.fromFactorID = fromFactorID;
//        this.externalStorage = externalStorage;
//    }
//
//
//    @Override
//    public String toString() {
//        return "Server{" +
//                "fromFactorID=" + fromFactorID +
//                ", externalStorage=" + externalStorage +
//                '}';
//    }
//}
