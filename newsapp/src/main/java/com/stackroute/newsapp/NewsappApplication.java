package com.stackroute.newsapp;

import com.stackroute.newsapp.userservice.model.Role;
import com.stackroute.newsapp.userservice.model.User;
import com.stackroute.newsapp.userservice.model.UserRole;
import com.stackroute.newsapp.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class NewsappApplication implements CommandLineRunner  {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {

		SpringApplication.run(NewsappApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code");
//
//		User user = new User();
//
//
//		user.setFirstName("Sarbeswar");
//		user.setLastName("Swain");
//		user.setUsername("Sarbe77");
//		user.setPassword("abcd");
//		user.setEmail("sarbeswar1999@gmail.com");
//
//		Role role1= new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		Set<UserRole> userRoleSet= new HashSet<>();
//		UserRole userRole= new UserRole();
//		userRole.setRole((role1));
//
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//		User user1= this.userService.createUser(user,userRoleSet);
//		System.out.println(user1);

	}
}
