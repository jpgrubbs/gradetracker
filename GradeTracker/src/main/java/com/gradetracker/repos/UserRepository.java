package com.gradetracker.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gradetracker.models.User;
public interface UserRepository extends JpaRepository<User, Integer> {

}
