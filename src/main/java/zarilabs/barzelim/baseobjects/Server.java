package zarilabs.barzelim.baseobjects;

import javax.persistence.Entity;

@Entity
public class Server extends Device{
    private int fromFactorID;
    private String externalStorage; //used to be Storage

    public Server(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int fromFactorID, Storage externalStorage) {
        super(serialNumber, name, vendorId, osTypeId, osVersionId);
        this.fromFactorID = fromFactorID;
        this.externalStorage = externalStorage.getSerialNumber();
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
