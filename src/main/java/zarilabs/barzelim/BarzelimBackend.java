package zarilabs.barzelim;

//import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import zarilabs.barzelim.baseobjects.Storage;
import zarilabs.barzelim.services.StorageService;
//import org.springframework.context.annotation.Bean;
//import zarilabs.barzelim.baseobjects.Device;
//import zarilabs.barzelim.services.DeviceService;
//import zarilabs.barzelim.baseobjects.Storage;
//import zarilabs.barzelim.services.DeviceService;
//import zarilabs.barzelim.services.StorageService;

import java.util.stream.Stream;

@SpringBootApplication(scanBasePackages="zarilabs.barzelim")
//@SpringBootApplication
public class BarzelimBackend {

	public static void main(String[] args) {
		SpringApplication.run(BarzelimBackend.class, args);
	}
	@Bean
	ApplicationRunner init(StorageService repository) {

		String[][] data = {
				{"1","95102c60","Arad's OnePlus 7T","1","1","1","1","1","1,1,1,1,1"}
		};

		return args -> {
			Stream.of(data).forEach(array -> {
				if(Integer.parseInt(array[0]) == 1){
					Storage device = new Storage(array[1],array[2], Integer.parseInt(array[3]),Integer.parseInt(array[4]),Integer.parseInt(array[5]),1,1,"");
					repository.save(device);
				}
				else{
					Storage netapp = new Storage(array[1],array[2], Integer.parseInt(array[3]),Integer.parseInt(array[4]),Integer.parseInt(array[5]),Integer.parseInt(array[6]),Integer.parseInt(array[7]),array[8]);
					repository.save(netapp);
				}

			});
			repository.findAll().forEach(System.out::println);
		};
	}

}