package zarilabs.barzelim.neo4jrepositories;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import zarilabs.barzelim.basenodes.BladeEnclosureNode;

public interface BladeEnclosureNodeService extends Neo4jRepository<BladeEnclosureNode, Long> {
    BladeEnclosureNode findByName(Integer name);
    BladeEnclosureNode findBySerialNumber(String serialNumber);
}
