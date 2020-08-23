package zarilabs.barzelim.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @GetMapping(value = "/deviceList")
    public List<Device> getDevices() {
        return deviceService.findAll();
    }
    @GetMapping(value = "/storageList")
    public List<Storage> getStorages() {
        return storageService.findAll();
    }
    @GetMapping(value = "/networkList")
    public List<Network> getNetworks() {
        return networkService.findAll();
    }
    @GetMapping(value = "/linkList")
    public List<Link> getLinks() {
        return linkService.findAll();
    }
    @GetMapping(value = "/segmentList")
    public List<Segment> getSegments() {
        return segmentService.findAll();
    }
    @GetMapping(value = "/serverList")
    public List<Server> getServers() {
        return serverService.findAll();
    }
    @GetMapping(value = "/clusterList")
    public List<Cluster> getClusters() {
        return clusterService.findAll();
    }
}
