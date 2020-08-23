package zarilabs.barzelim.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import zarilabs.barzelim.baseobjects.Storage;

@RepositoryRestResource
public interface StorageService extends CrudRepository<Storage, String> {

}
