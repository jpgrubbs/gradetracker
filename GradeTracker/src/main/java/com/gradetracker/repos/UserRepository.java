package com.gradetracker.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gradetracker.models.User;
public interface UserRepository extends JpaRepository<User, Integer> {
	List<User> findByUsername(String username);
}
