package zarilabs.barzelim.baseobjects;

import javax.persistence.*;

@Entity
public class Segment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @SequenceGenerator(name="segment_generator", sequenceName = "car_seq", allocationSize=50)
    private Long id;
    private String ipaddress;
    private int[] vlans;

    protected Segment() {}

    public Segment(String ipaddress, int[] vlans) {
        this.ipaddress = ipaddress;
        this.vlans = vlans;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIpaddress() {
        return ipaddress;
    }

    public void setIpaddress(String ipaddress) {
        this.ipaddress = ipaddress;
    }

    public int[] getVlans() {
        return vlans;
    }

    public void setVlans(int[] vlans) {
        this.vlans = vlans;
    }
}
