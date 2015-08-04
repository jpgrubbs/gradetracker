package com.gradetracker.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="users")
public class User {
  @Id
  @Column(name="username")
  private String username;
  @Column(name="password")
  private String password;
  @Column(name="enabled")
  private int enabled;
  @Column(name="email")
  private String email;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public boolean isEnabled() {
    return enabled == 1;
  }

  public void setEnabled(int enabled) {
    this.enabled = enabled;
  }

  public void setPassword(String password) {
    this.password = password;
  }
  
  public String getEmail() {
	  return email;
  }

  public void setEmail(String email) {
	  this.email = email;
  }
}