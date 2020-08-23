package zarilabs.barzelim.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import zarilabs.barzelim.baseobjects.Device;

@RepositoryRestResource
public interface DeviceService extends CrudRepository<Device, String> {

}
