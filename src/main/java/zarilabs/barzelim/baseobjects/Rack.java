package zarilabs.barzelim.baseobjects;

import javax.persistence.*;
import java.util.Set;
import lombok.Setter;
import lombok.Getter;
@Getter @Setter
@Entity
public class Rack {
    @Id
    private int rack_number;
    private int networkId;
    private int size;

    protected Rack() {}

    public Rack(int number, Device[] content, int networkId, int size) {
        this.rack_number = number;
//        this.content = Set.of(content);
        this.networkId = networkId;
        this.size = size;
    }
}
