package zarilabs.barzelim.neo4jrepositories;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import zarilabs.barzelim.basenodes.XDeviceNode;
import zarilabs.barzelim.basenodes.RackNode;
//import zarilabs.barzelim.baseobjects.Device;
//import zarilabs.barzelim.baseobjects.Rack;

import java.util.List;
import java.util.stream.Stream;

public interface RackNodeService extends Neo4jRepository<RackNode, Long> {
    RackNode findByName(Integer name);

    // returns all the rackNumber of all the racks
    @Query ("MATCH (rack:RackNode)\n"+
            "RETURN rack.name")
    List<String> getAllRackNumber();
}
