package zarilabs.barzelim.neo4jrepositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import zarilabs.barzelim.basenodes.XDeviceNode;
import zarilabs.barzelim.baseobjects.Device;

import java.util.List;

public interface DeviceNodeService extends Neo4jRepository<XDeviceNode, Long> {
    XDeviceNode findByserialNumber(String serialNumber);
}
