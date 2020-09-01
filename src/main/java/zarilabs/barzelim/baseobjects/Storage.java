package zarilabs.barzelim.baseobjects;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Inheritance( strategy = InheritanceType.JOINED )
public class Storage extends Device {
    private int arrayTypeId;
    private int arrayProtocolId;
    private String extramgmtIps;

    private Storage(){
        super();
    }
    public Storage(String serialNumber, String name, int vendorId, int osTypeId, int osVersionId, int arrayTypeId, int arrayProtocolId, String extramgmtIps) {
        super(serialNumber, name, vendorId, osTypeId, osVersionId);
        this.arrayTypeId = arrayTypeId;
        this.arrayProtocolId = arrayProtocolId;
        this.extramgmtIps = extramgmtIps;
    }

    public int getArrayTypeId() {
        return arrayTypeId;
    }

    public void setArrayTypeId(int arrayTypeId) {
        this.arrayTypeId = arrayTypeId;
    }

    public int getArrayProtocolId() {
        return arrayProtocolId;
    }

    public void setArrayProtocolId(int arrayProtocolId) {
        this.arrayProtocolId = arrayProtocolId;
    }

    public String getExtramgmtIps() {
        return extramgmtIps;
    }

    public void setExtramgmtIps(String extramgmtIps) {
        this.extramgmtIps = extramgmtIps;
    }

    @Override
    public String toString() {
        return "Storage{" +
                "arrayTypeId=" + arrayTypeId +
                ", arrayProtocolId=" + arrayProtocolId +
                ", extramgmtIps='" + extramgmtIps + '\'' +
                '}';
    }
}
