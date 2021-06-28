package zarilabs.barzelim.neo4jrepositories;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import zarilabs.barzelim.basenodes.LinkRelation;

public interface LinkRelationService extends Neo4jRepository<LinkRelation, Long> {

}
