package zarilabs.barzelim.baseobjects;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter @Setter
@Entity
public class Link {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @SequenceGenerator(name="link_generator", sequenceName = "link_seq", allocationSize=50)
    private Long id;
    private String fromDevice;
    private String toDevice;
    private boolean isOneDirection;
    private int speed;
    private String fromPort;
    private String toPort;

    private Link(){

    }
    public Link(String fromDeviceSerial, String toDeviceSerial, boolean isOneDirection, int speed, String fromPort, String toPort) {
        this.fromDevice = fromDeviceSerial;
        this.toDevice = toDeviceSerial;
        this.isOneDirection = isOneDirection;
        this.speed = speed;
        this.fromPort = fromPort;
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
