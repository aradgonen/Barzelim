//package zarilabs.barzelim.services;
//
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
//import zarilabs.barzelim.baseobjects.Device;
//
//import java.util.List;
//
//@RepositoryRestResource
//public interface DeviceService extends CrudRepository<Device, String> {
//    String BASE_QUERY = "SELECT *, 0 AS clazz_ FROM public.device WHERE public.device.rack_number=:rack_number";
//    @Query(value = BASE_QUERY, nativeQuery = true)
//    List<Device> findDeviceByRack(@Param("rack_number") int rack_number);
//}
