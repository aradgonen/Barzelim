package zarilabs.barzelim.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zarilabs.barzelim.baseobjects.*;
import zarilabs.barzelim.services.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/barzelim")
public class BarzelimController {

    @Resource
    DeviceService deviceService;
    @Resource
    StorageService storageService;
    @Resource
    NetworkService networkService;
    @Resource
    LinkService linkService;
    @Resource
    SegmentService segmentService;
    @Resource
    ServerService serverService;
    @Resource
    ClusterService clusterService;
    @Resource
    RackService rackService;

    @GetMapping(value = "/devices")
    public List<Device> getDevices() {
        return (List<Device>) deviceService.findAll();
    }
    @GetMapping(value = "/devices/storage")
    public List<Storage> getStorages() { return (List<Storage>) storageService.findAll(); }
    @GetMapping(value = "/devices/network")
    public List<Network> getNetworks() {
        return (List<Network>) networkService.findAll();
    }
    @GetMapping(value = "/devices/servers")
    public List<Server> getServers() { return (List<Server>) serverService.findAll(); }
    @GetMapping(value = "/links")
    public List<Link> getLinks() {
        return (List<Link>) linkService.findAll();
    }
    @GetMapping(value = "/segments")
    public List<Segment> getSegments() {
        return (List<Segment>) segmentService.findAll();
    }
    @GetMapping(value = "/clusters")
    public List<Cluster> getClusters() {
        return (List<Cluster>) clusterService.findAll();
    }
    @GetMapping(value = "/racks")
    public List<Rack> getRacks() {
        return (List<Rack>) rackService.findAll();
    }
}
