package zarilabs.barzelim.baseobjects;

import javax.persistence.*;

@Entity
public class Segment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @SequenceGenerator(name="segment_generator", sequenceName = "car_seq", allocationSize=50)
    private Long id;
    private Segment() {}
}
