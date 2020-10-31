package zarilabs.barzelim;

//import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import zarilabs.barzelim.basenodes.*;
import zarilabs.barzelim.baseobjects.*;
import zarilabs.barzelim.neo4jrepositories.*;
import zarilabs.barzelim.services.*;
//import org.springframework.context.annotation.Bean;
//import zarilabs.barzelim.baseobjects.Device;
//import zarilabs.barzelim.services.DeviceService;
//import zarilabs.barzelim.baseobjects.Storage;
//import zarilabs.barzelim.services.DeviceService;
//import zarilabs.barzelim.services.StorageService;

import java.util.UUID;
import java.util.stream.Stream;

//@SpringBootApplication(scanBasePackages="zarilabs.barzelim")
@EnableNeo4jRepositories
@SpringBootApplication
public class BarzelimBackend {

	public static void main(String[] args) {
		SpringApplication.run(BarzelimBackend.class, args);
	}
	@Bean
	CommandLineRunner demo(LinkRelationService linkRelationService,DeviceNodeService deviceNodeService, RackNodeService rackNodeService, StorageNodeService storageNodeService, NetworkNodeService networkNodeService, ServerNodeService serverNodeService){
		return args -> {
			deviceNodeService.deleteAll();
			rackNodeService.deleteAll();
			serverNodeService.deleteAll();
			storageNodeService.deleteAll();
			networkNodeService.deleteAll();
			linkRelationService.deleteAll();

			//define devices
			NetworkNode device_a = new NetworkNode("a1a2a3a4a5a6","access switch","cisco","nxos","10",69,"",19,false,true);
			ServerNode device_b = new ServerNode("h5h5h65h76h5","esxi","hp","esx","7",69,"",10,"Pizza","NetApp-LAB");
			StorageNode device_c = new StorageNode("25445424354","NetApp-LAB","NetApp","ONTAP","9.3",69,"",20,"NetApp","SAN","1.1.1.1");
			ServerNode device_d = new ServerNode("sdfkjsdbkkfdj78dvj","linux","cisco","rhel","8",79,"",12,"Pizza","EMC-PROD");
			NetworkNode device_e = new NetworkNode("kdhf89df","access switch","cisco","nxos","10",79,"",19,false,true);
			StorageNode device_f = new StorageNode("ofjsea8","EMC-PROD","EMC","Enginuity","5977",79,"",20,"EMC","SAN","1.1.1.2");
			//define racks
			RackNode rack_a = new RackNode(69,"LAB",42);
			RackNode rack_b = new RackNode(79,"PROD",42);
			//define link
			LinkRelation link_a = new LinkRelation("layer_2",device_b,device_a);
			rack_a.putInRack(device_a);
			rack_a.putInRack(device_b);
			rack_a.putInRack(device_c);
			rack_b.putInRack(device_d);
			rack_b.putInRack(device_e);
			rack_b.putInRack(device_f);

			device_b.connectToSan(device_c);
			device_d.connectToSan(device_f);


			//save everything
			networkNodeService.save(device_a);
			serverNodeService.save(device_b);
			storageNodeService.save(device_c);
			serverNodeService.save(device_d);
			networkNodeService.save(device_e);
			storageNodeService.save(device_f);
			rackNodeService.save(rack_a);
			rackNodeService.save(rack_b);
			linkRelationService.save(link_a);


			System.out.println("a");
		};
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