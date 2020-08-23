package zarilabs.barzelim.baseobjects;

public class Link {
    private Device fromDevice;
    private Device toDevice;
    private boolean isOneDirection;
    private int speed;
    private String fromPort;
    private String toPort;

    public Link(Device fromDevice, Device toDevice, boolean isOneDirection, int speed, String fromPort, String toPort) {
        this.fromDevice = fromDevice;
        this.toDevice = toDevice;
        this.isOneDirection = isOneDirection;
        this.speed = speed;
        this.fromPort = fromPort;
        this.toPort = toPort;
    }

    public Device getFromDevice() {
        return fromDevice;
    }

    public void setFromDevice(Device fromDevice) {
        this.fromDevice = fromDevice;
    }

    public Device getToDevice() {
        return toDevice;
    }

    public void setToDevice(Device toDevice) {
        this.toDevice = toDevice;
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
