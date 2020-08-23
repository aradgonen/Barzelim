package zarilabs.barzelim.baseobjects;

public class Server extends Device{
    private int fromFactorID;
    private Storage externalStorage;

    public Server(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int fromFactorID, Storage externalStorage) {
        super(serialNumber, name, vendorId, osTypeId, osVersionId);
        this.fromFactorID = fromFactorID;
        this.externalStorage = externalStorage;
    }

    public int getFromFactorID() {
        return fromFactorID;
    }

    public void setFromFactorID(int fromFactorID) {
        this.fromFactorID = fromFactorID;
    }

    public Storage getExternalStorage() {
        return externalStorage;
    }

    public void setExternalStorage(Storage externalStorage) {
        this.externalStorage = externalStorage;
    }

    @Override
    public String toString() {
        return "Server{" +
                "fromFactorID=" + fromFactorID +
                ", externalStorage=" + externalStorage +
                '}';
    }
}
