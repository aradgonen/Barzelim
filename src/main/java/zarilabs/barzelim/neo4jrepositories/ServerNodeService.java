package zarilabs.barzelim.neo4jrepositories;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import zarilabs.barzelim.basenodes.DeviceNode;
import zarilabs.barzelim.basenodes.ServerNode;

public interface ServerNodeService extends Neo4jRepository<ServerNode, Long> {
    ServerNode findByserialNumber(String serialNumber);
}
