package zarilabs.barzelim.baseobjects;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@PrimaryKeyJoinColumn(referencedColumnName="serialNumber")
public class Server extends Device{
    private int fromFactorID;
    private String externalStorage; //used to be Storage

    private Server(){
        super();
    }


    public Server(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int rackNumber, int uNumber, int fromFactorID, String externalStorage) {
        super(serialNumber, name, vendorId, osTypeId, osVersionId, rackNumber, uNumber);
        this.fromFactorID = fromFactorID;
        this.externalStorage = externalStorage;
    }

    public int getFromFactorID() {
        return fromFactorID;
    }

    public void setFromFactorID(int fromFactorID) {
        this.fromFactorID = fromFactorID;
    }

    public String getExternalStorage() {
        return externalStorage;
    }

    public void setExternalStorage(Storage externalStorage) {
        this.externalStorage = externalStorage.getSerialNumber();
    }

    @Override
    public String toString() {
        return "Server{" +
                "fromFactorID=" + fromFactorID +
                ", externalStorage=" + externalStorage +
                '}';
    }
}
