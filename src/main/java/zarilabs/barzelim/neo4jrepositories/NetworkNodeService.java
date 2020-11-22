package zarilabs.barzelim.neo4jrepositories;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import zarilabs.barzelim.basenodes.NetworkNode;

public interface NetworkNodeService extends Neo4jRepository<NetworkNode, Long> {
    NetworkNode findByserialNumber(String serialNumber);
}
