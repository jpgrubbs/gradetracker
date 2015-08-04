package com.gradetracker.web;

import com.gradetracker.models.User;
import com.gradetracker.repos.UserRepository;
import com.gradetracker.models.Authority;
import com.gradetracker.repos.AuthorityRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
  @Autowired
  private UserRepository repo;
  @Autowired
  private AuthorityRepository authRepo;
  
  @RequestMapping(method = RequestMethod.POST)
  public User addUser(@RequestBody User user) {
	Authority auth = new Authority();
	auth.setAuthority("ROLE_USER");
	auth.setUsername(user.getUsername());
	User ret = repo.saveAndFlush(user);
	authRepo.saveAndFlush(auth);
	return ret;
  }
  
}