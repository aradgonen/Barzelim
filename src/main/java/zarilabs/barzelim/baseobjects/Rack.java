package zarilabs.barzelim.baseobjects;

import javax.persistence.*;

@Entity
public class Rack {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @SequenceGenerator(name="rack_generator", sequenceName = "rack_seq", allocationSize=50)
    private Long id;
    private int number;
    private String[] content;
    private int networkId;

    protected Rack() {}

    public Rack(int number, String[] content, int networkId) {
        this.number = number;
        this.content = content;
        this.networkId = networkId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String[] getContent() {
        return content;
    }

    public void setContent(String[] content) {
        this.content = content;
    }

    public int getNetworkId() {
        return networkId;
    }

    public void setNetworkId(int networkId) {
        this.networkId = networkId;
    }
}
