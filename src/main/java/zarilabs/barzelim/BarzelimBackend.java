package zarilabs.barzelim;

//import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import zarilabs.barzelim.baseobjects.*;
import zarilabs.barzelim.services.*;
//import org.springframework.context.annotation.Bean;
//import zarilabs.barzelim.baseobjects.Device;
//import zarilabs.barzelim.services.DeviceService;
//import zarilabs.barzelim.baseobjects.Storage;
//import zarilabs.barzelim.services.DeviceService;
//import zarilabs.barzelim.services.StorageService;

import java.util.UUID;
import java.util.stream.Stream;

@SpringBootApplication(scanBasePackages="zarilabs.barzelim")
//@SpringBootApplication
public class BarzelimBackend {

	public static void main(String[] args) {
		SpringApplication.run(BarzelimBackend.class, args);
	}
//	@Bean
//	ApplicationRunner init(DeviceService deviceService, StorageService storageService, NetworkService networkService, ClusterService clusterService, LinkService linkService, RackService rackService, SegmentService segmentService, ServerService serverService) {
//
//		String[][] data = {
//				//servers
//				{"SERVER","qwerty123456", "ESXi_Prod_1", "1", "1", "1", "892", "37", "1", "123456789"},
//				//network
//				{"NETWORK","lkjhgf8765", "Core_Sw_1", "2","2","2","892","42","false","true"},{"NETWORK","kdjfbjd678", "Firewall_Prod_1", "3","3","3","892","40","true","false"},{"NETWORK","fox567890", "MDS_Prod_1", "1","1","3","892","41","false","true"},
//				//storage
//				{"STORAGE","123456789","NetApp_Prod_N1","4","4","4","892","32","1","1","1.1.1.1,2.2.2.2,3.3.3.3"},{"STORAGE","123456788","NetApp_Prod_N2","4","4","4","892","30","1","1","1.1.1.4,2.252.2,3.35.3.3"},
//				//segments
//				{"SEGMENT","1.1.1.1","[100,101]"},
//				//racks
//				{"RACK","892","qwerty123456,lkjhgf8765,kdjfbjd678,fox567890,123456789,123456788","1","45"},
//				//clusters
//				{"CLUSTER","123456789,123456788","NetApp_Prod_1","1"}
//		};
//
//		return args -> {
//			Stream.of(data).forEach(array -> {
//					//Device device = new Device(array[0],array[1], Integer.parseInt(array[2]),Integer.parseInt(array[3]),Integer.parseInt(array[4]));
//				switch (array[0]){
//					case "SERVER":
//						Server server = new Server(array[1],array[2],Integer.parseInt(array[3]),Integer.parseInt(array[4]),Integer.parseInt(array[5]),Integer.parseInt(array[6]),Integer.parseInt(array[7]),Integer.parseInt(array[8]),array[9]);
//						serverService.save(server);
//						break;
//					case "NETWORK":
//						Network network = new Network(array[1],array[2],Integer.parseInt(array[3]),Integer.parseInt(array[4]),Integer.parseInt(array[5]),Integer.parseInt(array[6]),Integer.parseInt(array[7]),Boolean.parseBoolean(array[8]),Boolean.parseBoolean(array[9]));
//						networkService.save(network);
//						break;
//					case "STORAGE":
//						Storage storage = new Storage(array[1],array[2],Integer.parseInt(array[3]),Integer.parseInt(array[4]),Integer.parseInt(array[5]),Integer.parseInt(array[6]),Integer.parseInt(array[7]),Integer.parseInt(array[8]),Integer.parseInt(array[9]),array[10]);
//						storageService.save(storage);
//						break;
//					case "SEGMENT":
//						Segment segment = new Segment(array[1],Stream.of(array[2].replaceAll("[\\[\\]\\, ]", "").split("")).mapToInt(Integer::parseInt).toArray());
//						segmentService.save(segment);
//						break;
//					case "RACK":
//						//Rack rack = new Rack(Long.parseLong(UUID.randomUUID().toString(), 16),Integer.parseInt(array[1]),array[2].split(","),Integer.parseInt(array[3]));
//						Rack rack = new Rack(Integer.parseInt(array[1]),array[2].split(","),Integer.parseInt(array[3]), Integer.parseInt((array[4])));
//						rackService.save(rack);
//						break;
//					case "CLUSTER":
//						Cluster cluster = new Cluster(array[1].split(","),array[2],Integer.parseInt(array[3]));
//						clusterService.save(cluster);
//						break;
//				}
//
//			});
//			deviceService.findAll().forEach(System.out::println);
//			segmentService.findAll().forEach(System.out::println);
//			rackService.findAll().forEach(System.out::println);
//			clusterService.findAll().forEach(System.out::println);
//		};
//	}

}