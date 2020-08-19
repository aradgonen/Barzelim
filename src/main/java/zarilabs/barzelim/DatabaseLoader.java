package zarilabs.barzelim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import zarilabs.barzelim.device.DeviceRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final DeviceRepository repository;
    @Autowired
    public DatabaseLoader(DeviceRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        //this.repository.save(new Device("95102c60","Arad's OnePlus 7T",1,1,1));
    }
}
