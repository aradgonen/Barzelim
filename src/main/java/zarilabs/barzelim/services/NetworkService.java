package zarilabs.barzelim.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import zarilabs.barzelim.baseobjects.Network;

@RepositoryRestResource
public interface NetworkService extends CrudRepository<Network, String> {

}
