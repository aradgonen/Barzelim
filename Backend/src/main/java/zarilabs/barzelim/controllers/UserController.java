package zarilabs.barzelim.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zarilabs.barzelim.models.Role;
import zarilabs.barzelim.models.User;
import zarilabs.barzelim.repository.RoleRepository;
import zarilabs.barzelim.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @GetMapping("/all")
    public List<User> getAllUsersData() {
        return userRepository.findAll();
    }
    @GetMapping("/delete/{user}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(){

    }
}
