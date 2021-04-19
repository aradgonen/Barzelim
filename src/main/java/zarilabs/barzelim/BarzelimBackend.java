package zarilabs.barzelim;

//import org.springframework.boot.ApplicationRunner;
//import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import zarilabs.barzelim.basenodes.*;
//import zarilabs.barzelim.baseobjects.*;
import zarilabs.barzelim.neo4jrepositories.*;
//import zarilabs.barzelim.services.*;
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
			NetworkNode device_a = new NetworkNode("a1a2a3a4a5a6","access switch","cisco","nxos","10",69,"",41,false,true,1);
			ServerNode device_b = new ServerNode("h5h5h65h76h5","esxi","hp","esx","7",69,"",39,"Pizza","NetApp-LAB",1);
			StorageNode device_c = new StorageNode("25445424354","NetApp-LAB","NetApp","ONTAP","9.3",69,"",33,"NetApp","SAN","1.1.1.1",1);
			ServerNode device_d = new ServerNode("sdfkjsdbkkfdj78dvj","linux","cisco","rhel","8",79,"",35,"Pizza","EMC-PROD",2);
			NetworkNode device_e = new NetworkNode("kdhf89df","access switch","cisco","nxos","10",79,"",42,false,true,2);
			StorageNode device_f = new StorageNode("ofjsea8","EMC-PROD","EMC","Enginuity","5977",79,"",40,"EMC","SAN","1.1.1.2",40);
			//define racks
			RackNode rack_a = new RackNode(69,"LAB",42);
			RackNode rack_b = new RackNode(79,"PROD",42);
			RackNode rack_c = new RackNode(80,"PROD",42);
			RackNode rack_d = new RackNode(81,"PROD",42);
			RackNode rack_e = new RackNode(82,"PROD",42);
			RackNode rack_f = new RackNode(83,"PROD",42);
			RackNode rack_g = new RackNode(84,"PROD",42);
			RackNode rack_h = new RackNode(85,"PROD",42);
			RackNode rack_i = new RackNode(86,"PROD",42);
			RackNode rack_j = new RackNode(87,"PROD",42);
			RackNode rack_k = new RackNode(88,"PROD",42);
			RackNode rack_l = new RackNode(89,"PROD",42);

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
			rackNodeService.save(rack_c);
			rackNodeService.save(rack_d);
			rackNodeService.save(rack_e);
			rackNodeService.save(rack_f);
			rackNodeService.save(rack_g);
			rackNodeService.save(rack_h);
			rackNodeService.save(rack_i);
			rackNodeService.save(rack_j);
			rackNodeService.save(rack_k);
			rackNodeService.save(rack_l);
			linkRelationService.save(link_a);

			System.out.println("********************************************************************");
			System.out.println("**********************SimpliDC server started!**********************");
			System.out.println("********************************************************************");
		};
	}
}