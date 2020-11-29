package zarilabs.barzelim.controllers;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import zarilabs.barzelim.basenodes.*;
import zarilabs.barzelim.baseobjects.*;
import zarilabs.barzelim.neo4jrepositories.*;
import zarilabs.barzelim.services.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/barzelim")
public class BarzelimController {

//    @Resource
//    DeviceService deviceService;
//    @Resource
//    StorageService storageService;
//    @Resource
//    NetworkService networkService;
//    @Resource
//    LinkService linkService;
//    @Resource
//    SegmentService segmentService;
//    @Resource
//    ServerService serverService;
//    @Resource
//    ClusterService clusterService;
//    @Resource
//    RackService rackService;
//
//
//
//
//    @GetMapping(value = "/devices")
//    public List<Device> getDevices() {
//        return (List<Device>) deviceService.findAll();
//    }
//    @PostMapping(path = "/devices", consumes = "application/json", produces = "application/json")
//    public void addMember(@RequestBody Device device) {
//        deviceService.save(device);
//    }
//    @GetMapping(path = "/devices/rack/{rack_number}")
//    public List<Device> getDevicesByRack(@PathVariable("rack_number") String rack_number )  {
//        return deviceService.findDeviceByRack(Integer.parseInt(rack_number));
//    }
//    @GetMapping(value = "/devices/storage")
//    public List<Storage> getStorages() { return (List<Storage>) storageService.findAll(); }
//    @GetMapping(value = "/devices/network")
//    public List<Network> getNetworks() {
//        return (List<Network>) networkService.findAll();
//    }
//    @GetMapping(value = "/devices/servers")
//    public List<Server> getServers() { return (List<Server>) serverService.findAll(); }
//    @GetMapping(value = "/links")
//    public List<Link> getLinks() {
//        return (List<Link>) linkService.findAll();
//    }
//    @GetMapping(value = "/segments")
//    public List<Segment> getSegments() {
//        return (List<Segment>) segmentService.findAll();
//    }
//    @GetMapping(value = "/clusters")
//    public List<Cluster> getClusters() {
//        return (List<Cluster>) clusterService.findAll();
//    }
//    @GetMapping(value = "/racks")
//    public List<Rack> getRacks() {
//        return (List<Rack>) rackService.findAll();
//    }
//    @PostMapping(path = "/racks", consumes = "application/json", produces = "application/json")
//    public void addMember(@RequestBody Rack rack) {
//        rackService.save(rack);
//    }















    //Neo4J Controllers
    @Resource
    DeviceNodeService deviceNodeService;
    @Resource
    ServerNodeService serverNodeService;
    @Resource
    RackNodeService rackNodeService;
    @Resource
    StorageNodeService storageNodeService;
    @Resource
    LinkRelationService linkRelationService;

//    @GetMapping(value = "/neo4j/device/connections/{serialNumber}")
//    public List<XDeviceNode> getDeviceConnectionsBySerial(@PathVariable("serialNumber") String serialNumber){
//        List<XDeviceNode> temp = deviceNodeService.getAllConnections(serialNumber);
//        return temp;
//    }
    @GetMapping(value = "/neo4j/devices")
    public List<XDeviceNode> getDeviceNodes(){ return (List<XDeviceNode>) deviceNodeService.findAll();}
    @GetMapping(value = "/neo4j/racks")
    public List<RackNode> getRacksNodes(){ return (List<RackNode>) rackNodeService.findAll();}

    @PostMapping(value = "/neo4j/servers" ,consumes = "application/json", produces = "application/json")
    public void newServer(@RequestBody ServerNode serverNode) {
        RackNode insertTo = rackNodeService.findByName(serverNode.getRackNumber());
        if(serverNode.getExternalStorage() != null)
        {
            StorageNode san = storageNodeService.findByName(serverNode.getExternalStorage());
            serverNode.connectToSan(san);
        }
        insertTo.putInRack(serverNode);
        rackNodeService.save(insertTo);
    }

//    @PostMapping(value = "/neo4j/lan/connect" ,consumes = "application/json", produces = "application/json")
//    public void connectLan(@RequestParam String fromSerial, @RequestParam String toSerial, @RequestParam String netType){
//        XDeviceNode from = deviceNodeService.findByserialNumber(fromSerial);
//        XDeviceNode to = deviceNodeService.findByserialNumber(toSerial);
//        LinkRelation lan = new LinkRelation(netType,from,to);
//        linkRelationService.save(lan);
//    }
//
//    @PostMapping(value = "/neo4j/rack/insert", consumes = "application/json", produces = "application/json")
//    public void addDeviceToRack(@RequestParam Integer rackNumber, @RequestParam String serialNumber){
//        RackNode insertTo = rackNodeService.findByName(rackNumber);
//        XDeviceNode toInsert = deviceNodeService.findByserialNumber(serialNumber);
//        insertTo.putInRack(toInsert);
//    }
}
