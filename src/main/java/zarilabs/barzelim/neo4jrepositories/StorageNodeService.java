package zarilabs.barzelim.neo4jrepositories;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import zarilabs.barzelim.basenodes.StorageNode;

public interface StorageNodeService extends Neo4jRepository<StorageNode, Long> {
    StorageNode findByserialNumber(String serialNumber);
    StorageNode findByName(String name);
}
