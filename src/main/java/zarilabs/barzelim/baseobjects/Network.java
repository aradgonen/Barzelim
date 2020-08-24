package zarilabs.barzelim.baseobjects;

import javax.persistence.Entity;

@Entity
public class Network extends Device {
    private boolean isLayer3;
    private boolean isLayer2;

    public Network(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, boolean isLayer3, boolean isLayer2) {
        super(serialNumber, name, vendorId, osTypeId, osVersionId);
        this.isLayer3 = isLayer3;
        this.isLayer2 = isLayer2;
    }

    public boolean isLayer3() {
        return isLayer3;
    }

    public void setLayer3(boolean layer3) {
        isLayer3 = layer3;
    }

    public boolean isLayer2() {
        return isLayer2;
    }

    public void setLayer2(boolean layer2) {
        isLayer2 = layer2;
    }

    @Override
    public String toString() {
        return "Network{" +
                "isLayer3=" + isLayer3 +
                ", isLayer2=" + isLayer2 +
                '}';
    }
}
