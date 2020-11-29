package zarilabs.barzelim.neo4jrepositories;

import org.neo4j.ogm.model.Result;
import org.neo4j.ogm.session.Session;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.support.SimpleNeo4jRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import zarilabs.barzelim.basenodes.XDeviceNode;
import zarilabs.barzelim.baseobjects.Device;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

//get the data from neo4j
//@Repository
//public class DeviceNodeService extends SimpleNeo4jRepository<XDeviceNode, Long> {
//    private static final String GET_ALL_DEVICE_CONNECTIONS = "MATCH (a {serialNumber: $serialNumber})-[r]-(b) RETURN r, b,a";
//    private final Session session;
//    public DeviceNodeService(Session session){
//        super(XDeviceNode.class,session);
//        this.session = session;
//    }
//    public List<XDeviceNode> getAllConnections(String serialNumber){
//        Map<String,String> parameter = Map.of("serialNumber", serialNumber);
//        Result rawDataFromDB = session.query(GET_ALL_DEVICE_CONNECTIONS,parameter);
//        List<XDeviceNode> results = new ArrayList<>();
//        return results;
//    }
//}
public interface DeviceNodeService extends Neo4jRepository<XDeviceNode, Long> {
    XDeviceNode findByserialNumber(String serialNumber);
}

