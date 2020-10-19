package zarilabs.barzelim.baseobjects;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter @Setter
@Entity
public class Segment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @SequenceGenerator(name="segment_generator", sequenceName = "segment_seq", allocationSize=50)
    private Long id;
    private String ipaddress;
    private int[] vlans;

    protected Segment() {}

    public Segment(String ipaddress, int[] vlans) {
        this.ipaddress = ipaddress;
        this.vlans = vlans;
    }
}
