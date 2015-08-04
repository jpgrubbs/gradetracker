package com.gradetracker.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gradetracker.models.Authority;
public interface AuthorityRepository extends JpaRepository<Authority, Integer> {

}