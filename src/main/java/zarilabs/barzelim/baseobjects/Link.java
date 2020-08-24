package zarilabs.barzelim.baseobjects;

import javax.persistence.*;

@Entity
public class Link {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @SequenceGenerator(name="link_generator", sequenceName = "car_seq", allocationSize=50)
    private Long id;
    private String fromDevice; //used to be Device
    private String toDevice;
    private boolean isOneDirection;
    private int speed;
    private String fromPort;
    private String toPort;

    private Link(){

    }
    public Link(Device fromDevice, Device toDevice, boolean isOneDirection, int speed, String fromPort, String toPort) {
        this.fromDevice = fromDevice.getSerialNumber();
        this.toDevice = toDevice.getSerialNumber();
        this.isOneDirection = isOneDirection;
        this.speed = speed;
        this.fromPort = fromPort;
        this.toPort = toPort;
    }

    public String getFromDevice() {
        return fromDevice;
    }

    public void setFromDevice(Device fromDevice) {
        this.fromDevice = fromDevice.getSerialNumber();
    }

    public String getToDevice() {
        return toDevice;
    }

    public void setToDevice(Device toDevice) {
        this.toDevice = toDevice.getSerialNumber();
    }

    public boolean isOneDirection() {
        return isOneDirection;
    }

    public void setOneDirection(boolean oneDirection) {
        isOneDirection = oneDirection;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public String getFromPort() {
        return fromPort;
    }

    public void setFromPort(String fromPort) {
        this.fromPort = fromPort;
    }

    public String getToPort() {
        return toPort;
    }

    public void setToPort(String toPort) {
        this.toPort = toPort;
    }

    @Override
    public String toString() {
        return "Link{" +
                "fromDevice=" + fromDevice +
                ", toDevice=" + toDevice +
                ", isOneDirection=" + isOneDirection +
                ", speed=" + speed +
                ", fromPort='" + fromPort + '\'' +
                ", toPort='" + toPort + '\'' +
                '}';
    }
}
