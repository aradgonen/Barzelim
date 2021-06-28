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
	CommandLineRunner demo(LinkRelationService linkRelationService,DeviceNodeService deviceNodeService, RackNodeService rackNodeService, StorageNodeService storageNodeService, NetworkNodeService networkNodeService, ServerNodeService serverNodeService, BladeEnclosureNodeService bladeEnclosureNodeService){
		return args -> {
			deviceNodeService.deleteAll();
			rackNodeService.deleteAll();
			serverNodeService.deleteAll();
			storageNodeService.deleteAll();
			networkNodeService.deleteAll();
			linkRelationService.deleteAll();
			bladeEnclosureNodeService.deleteAll();

			//define devices
			NetworkNode device_a = new NetworkNode("a1a2a3a4a5a6","access switch","cisco","nxos","10",69,"",41,false,true,1);
			ServerNode device_b = new ServerNode("h5h5h65h76h5","esxi","hp","esx","7",69,"",39,"Pizza","NetApp-LAB",3);
			StorageNode device_c = new StorageNode("25445424354","NetApp-LAB","NetApp","ONTAP","9.3",69,"",33,"NetApp","SAN","1.1.1.1",1);
			ServerNode device_d = new ServerNode("sdfkjsdbkkfdj78dvj","linux","cisco","rhel","8",79,"",35,"Pizza","EMC-PROD",2);
			NetworkNode device_e = new NetworkNode("kdhf89df","access switch","cisco","nxos","10",79,"",42,false,true,2);
			StorageNode device_f = new StorageNode("ofjsea8","EMC-PROD","EMC","Enginuity","5977",79,"",31,"EMC","SAN","1.1.1.2",30);


			//define BladeEnclosure
			BladeEnclosureNode bladeEnclosureNode = new BladeEnclosureNode("Enclusre123456741", "HPE Enclosure 1","HPE", "OA", "5", 82, "", 20,10, 16, "HPE Enclosure");
			BladeEnclosureNode bladeEnclosureNode1 = new BladeEnclosureNode("gbsckjasncklas","IBMEncA","IBM","MM","1",82, "",40,9,8,"IBM Enclosure");
			BladeEnclosureNode bladeEnclosureNode2 = new BladeEnclosureNode("sdsdsdsdsd","UCS Blades 1","Cisco","UCS","1",82, "",30,6,8,"Cisco UCS Enclosure");

			//define blades
			ServerNode enclosureDevice_1 = new ServerNode("EnclosureDeviceA", "EnclosureDeviceA", "HPE", "rhel", "8", 82, "", 20, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_4 = new ServerNode("EnclosureDeviceB", "EnclosureDeviceB", "HPE", "rhel", "8", 82, "", 20, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_5 = new ServerNode("EnclosureDeviceC", "EnclosureDeviceC", "HPE", "rhel", "8", 82, "", 20, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_8 = new ServerNode("EnclosureDeviceD", "EnclosureDeviceD", "HPE", "rhel", "8", 82, "", 20, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_14 = new ServerNode("EnclosureDeviceE", "EnclosureDeviceE", "HPE", "rhel", "8", 82, "", 19, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_16 = new ServerNode("EnclosureDeviceF", "EnclosureDeviceF", "HPE", "rhel", "8", 82, "", 19, "Blade", "EMC-PROD",1);

			ServerNode enclosureDevice_11 = new ServerNode("EnclosureDeviceA1", "EnclosureDeviceA11", "IBM", "rhel", "8", 82, "", 40, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_41 = new ServerNode("EnclosureDeviceB1", "EnclosureDeviceB11", "IBM", "rhel", "8", 82, "", 40, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_51 = new ServerNode("EnclosureDeviceC1", "EnclosureDeviceC11", "IBM", "rhel", "8", 82, "", 40, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_81 = new ServerNode("EnclosureDeviceD1", "EnclosureDeviceD11", "IBM", "rhel", "8", 82, "", 40, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_141 = new ServerNode("EnclosureDeviceE1", "EnclosureDeviceE11", "IBM", "rhel", "8", 82, "", 40, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_161 = new ServerNode("EnclosureDeviceF1", "EnclosureDeviceF11", "IBM", "rhel", "8", 82, "", 40, "Blade", "EMC-PROD",1);

			ServerNode enclosureDevice_111 = new ServerNode("EnclosureDeviceA11", "EnclosureDeviceA111", "Cisco", "rhel", "8", 82, "", 30, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_411 = new ServerNode("EnclosureDeviceB11", "EnclosureDeviceB111", "Cisco", "rhel", "8", 82, "", 30, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_511 = new ServerNode("EnclosureDeviceC11", "EnclosureDeviceC111", "Cisco", "rhel", "8", 82, "", 30, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_811 = new ServerNode("EnclosureDeviceD11", "EnclosureDeviceD111", "Cisco", "rhel", "8", 82, "", 30, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_1411 = new ServerNode("EnclosureDeviceE11", "EnclosureDeviceE111", "Cisco", "rhel", "8", 82, "", 30, "Blade", "EMC-PROD",1);
			ServerNode enclosureDevice_1611 = new ServerNode("EnclosureDeviceF11", "EnclosureDeviceF111", "Cisco", "rhel", "8", 82, "", 30, "Blade", "EMC-PROD",1);
			//put blades in enclosure
			bladeEnclosureNode.insertServerIntoEnclosure(enclosureDevice_1, 1);
			bladeEnclosureNode.insertServerIntoEnclosure(enclosureDevice_4, 4);
			bladeEnclosureNode.insertServerIntoEnclosure(enclosureDevice_5, 5);
			bladeEnclosureNode.insertServerIntoEnclosure(enclosureDevice_8, 8);
			bladeEnclosureNode.insertServerIntoEnclosure(enclosureDevice_14, 14);
			bladeEnclosureNode.insertServerIntoEnclosure(enclosureDevice_16, 16);

			bladeEnclosureNode1.insertServerIntoEnclosure(enclosureDevice_11, 1);
			bladeEnclosureNode1.insertServerIntoEnclosure(enclosureDevice_41, 3);
			bladeEnclosureNode1.insertServerIntoEnclosure(enclosureDevice_51, 4);
			bladeEnclosureNode1.insertServerIntoEnclosure(enclosureDevice_81, 5);
			bladeEnclosureNode1.insertServerIntoEnclosure(enclosureDevice_141, 6);
			bladeEnclosureNode1.insertServerIntoEnclosure(enclosureDevice_161, 8);

			bladeEnclosureNode2.insertServerIntoEnclosure(enclosureDevice_111, 1);
			bladeEnclosureNode2.insertServerIntoEnclosure(enclosureDevice_411, 3);
			bladeEnclosureNode2.insertServerIntoEnclosure(enclosureDevice_511, 4);
			bladeEnclosureNode2.insertServerIntoEnclosure(enclosureDevice_811, 5);
			bladeEnclosureNode2.insertServerIntoEnclosure(enclosureDevice_1411, 6);
			bladeEnclosureNode2.insertServerIntoEnclosure(enclosureDevice_1611, 8);

			//define racks
			RackNode rack_a = new RackNode(69,"LAB",42);
			RackNode rack_b = new RackNode(79,"PROD",44);
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
			rack_e.putInRack(bladeEnclosureNode);
			rack_e.putInRack(bladeEnclosureNode1);
			rack_e.putInRack(bladeEnclosureNode2);

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

			serverNodeService.save(enclosureDevice_1);
			serverNodeService.save(enclosureDevice_4);
			serverNodeService.save(enclosureDevice_5);
			serverNodeService.save(enclosureDevice_8);
			serverNodeService.save(enclosureDevice_14);
			serverNodeService.save(enclosureDevice_16);

			bladeEnclosureNodeService.save(bladeEnclosureNode);
			serverNodeService.save(enclosureDevice_11);
			serverNodeService.save(enclosureDevice_41);
			serverNodeService.save(enclosureDevice_51);
			serverNodeService.save(enclosureDevice_81);
			serverNodeService.save(enclosureDevice_141);
			serverNodeService.save(enclosureDevice_161);

			bladeEnclosureNodeService.save(bladeEnclosureNode1);

			serverNodeService.save(enclosureDevice_111);
			serverNodeService.save(enclosureDevice_411);
			serverNodeService.save(enclosureDevice_511);
			serverNodeService.save(enclosureDevice_811);
			serverNodeService.save(enclosureDevice_1411);
			serverNodeService.save(enclosureDevice_1611);

			bladeEnclosureNodeService.save(bladeEnclosureNode2);

			System.out.println("********************************************************************");
			System.out.println("**********************SimpliDC server started!**********************");
			System.out.println("********************************************************************");
		};
	}
}