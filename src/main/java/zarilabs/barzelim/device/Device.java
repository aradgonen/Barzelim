package zarilabs.barzelim.device;




import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Device {
    private @Id String serialNumber;
    private String name;
    private int vendorId;
    private int osTypeId;
    private int osVersionId;

    private Device() {}

    public Device(String serialNumber,String name, int vendorId, int osTypeId, int osVersionId) {
        this.serialNumber = serialNumber;
        this.name = name;
        this.vendorId = vendorId;
        this.osTypeId = osTypeId;
        this.osVersionId = osVersionId;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Device device = (Device) obj;
        return Objects.equals(serialNumber, device.serialNumber);
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public int getOsTypeId() {
        return osTypeId;
    }

    public void setOsTypeId(int osTypeId) {
        this.osTypeId = osTypeId;
    }

    public int getOsVersionId() {
        return osVersionId;
    }

    public void setOsVersionId(int osVersionId) {
        this.osVersionId = osVersionId;
    }

    @Override
    public String toString() {
        return "Device{" +
                "serialNumber='" + serialNumber + '\'' +
                ", name='" + name + '\'' +
                ", vendorId=" + vendorId + '\'' +
                ", osTypeId=" + osTypeId + '\'' +
                ", osVersionId=" + osVersionId +
                '}';
    }
}
