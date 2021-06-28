package zarilabs.barzelim.controllers;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import zarilabs.barzelim.basenodes.*;
//import zarilabs.barzelim.baseobjects.*;
import zarilabs.barzelim.neo4jrepositories.*;
//import zarilabs.barzelim.services.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/barzelim")
public class BarzelimController {
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
    NetworkNodeService networkNodeService;
    @Resource
    LinkRelationService linkRelationService;

//    PostRequests
    @PostMapping(value = "/racks" ,consumes = "application/json", produces = "application/json")
    public void newRack(@RequestBody RackNode rackNode) {
        //check if it already exists
        RackNode test = rackNodeService.findByName(rackNode.getName());
        System.out.println(test);
        rackNodeService.save(rackNode);
    }

    @PostMapping("/devices/xdevice")
    XDeviceNode newXDeviceNode(@RequestBody XDeviceNode newXDevice) {
        return deviceNodeService.save(newXDevice);
    }

    @PostMapping("/devices/storage")
    StorageNode newStorageDevice(@RequestBody StorageNode newStorageDevice) {
        return storageNodeService.save(newStorageDevice);
    }

    @PostMapping("/devices/networks")
    NetworkNode newNetworkDevice(@RequestBody NetworkNode newNetworkDevice) {
        return networkNodeService.save(newNetworkDevice);
    }

    @PostMapping("/devices/server")
    ServerNode newServerDevice(@RequestBody ServerNode newServerDevice) {
        return serverNodeService.save(newServerDevice);
    }

    @PostMapping(value = "/racks/insert")
    public void addDeviceToRack(@RequestParam Integer rackNumber, @RequestParam String serialNumber){
        RackNode insertTo = rackNodeService.findByName(rackNumber);
        XDeviceNode toInsert = deviceNodeService.findByserialNumber(serialNumber);
        insertTo.putInRack(toInsert);
        rackNodeService.save(insertTo);
    }

    @PostMapping(value = "/lan/connect")
    public void connectLan(@RequestParam String fromSerial, @RequestParam String toSerial, @RequestParam String netType){
        XDeviceNode from = deviceNodeService.findByserialNumber(fromSerial);
        XDeviceNode to = deviceNodeService.findByserialNumber(toSerial);
        LinkRelation lan = new LinkRelation(netType,from,to);
        linkRelationService.save(lan);
    }

    @PostMapping(value = "/san/connect")
    public void connectSan(@RequestParam String serverSerial, @RequestParam String storageName){
        ServerNode initiator = serverNodeService.findByserialNumber(serverSerial);
        StorageNode target = storageNodeService.findByName(storageName);
        initiator.connectToSan(target);
        serverNodeService.save(initiator);
    }



//    Get Requests
    @GetMapping(value = "/devices")
    public List<XDeviceNode> getDevices(){ return (List<XDeviceNode>) deviceNodeService.findAll();}

    @GetMapping(value = "/devices/" , params = "id")
    public XDeviceNode getDeviceById(@RequestParam String id) { return (XDeviceNode) deviceNodeService.findByserialNumber(id); }

    @GetMapping(value = "/racks")
    public List<RackNode> getRacksNodes() { return (List<RackNode>) rackNodeService.findAll(); }

    @GetMapping(value = "/racks/racknumbers")
    public List<String> getRacksNodesNumbers() { return (List<String>) rackNodeService.getAllRackNumber(); }

}
