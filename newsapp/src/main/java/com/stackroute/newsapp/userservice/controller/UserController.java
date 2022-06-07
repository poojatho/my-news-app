package com.stackroute.newsapp.userservice.controller;


import com.stackroute.newsapp.userservice.model.Role;
import com.stackroute.newsapp.userservice.model.User;
import com.stackroute.newsapp.userservice.model.UserRole;
import com.stackroute.newsapp.userservice.repository.UserRepository;
import com.stackroute.newsapp.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    //creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        Set<UserRole> roles= new HashSet<>();

        Role role= new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

        UserRole userRole= new UserRole();
        userRole.setRole(user);
        userRole.setRole(role);

        roles.add(userRole);

        return this.userService.createUser(user,roles);
    }
}
