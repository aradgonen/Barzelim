package zarilabs.barzelim.repository;

import zarilabs.barzelim.models.ERole;
import zarilabs.barzelim.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
