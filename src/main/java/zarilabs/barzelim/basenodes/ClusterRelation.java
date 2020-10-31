package zarilabs.barzelim.basenodes;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.RelationshipEntity;


@Getter @Setter
@RelationshipEntity
public class ClusterRelation {

    @Id @GeneratedValue private Long id;
}
