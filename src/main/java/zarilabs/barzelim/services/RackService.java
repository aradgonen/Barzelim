package zarilabs.barzelim.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import zarilabs.barzelim.baseobjects.Rack;

@RepositoryRestResource
public interface RackService extends CrudRepository<Rack, String> {

}
