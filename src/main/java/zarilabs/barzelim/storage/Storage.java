package zarilabs.barzelim.storage;

import zarilabs.barzelim.device.Device;

public class Storage extends Device {
    private int arrayTypeId;
    private int arrayProtocolId;
    private String extramgmtIps;

    public Storage(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int arrayTypeId, int arrayProtocolId, String extramgmtIps) {
        super(serialNumber, name, vendorId, osTypeId, osVersionId);
        this.arrayTypeId = arrayTypeId;
        this.arrayProtocolId = arrayProtocolId;
        this.extramgmtIps = extramgmtIps;
    }
}
