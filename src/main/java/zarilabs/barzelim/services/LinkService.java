package zarilabs.barzelim.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import zarilabs.barzelim.baseobjects.Link;

@RepositoryRestResource
public interface LinkService extends CrudRepository<Link, String> {

}
