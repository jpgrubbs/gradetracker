package com.gradetracker.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="authorities")
public class Authority {
  @Id
  @Column(name="username")
  private String username;
  @Column(name="authority")
  private String authority;
  
  public void setUsername(String username)
  {
	  this.username = username;
  }
  
  public String getUsername()
  {
	  return username;
  }
  
  public void setAuthority(String authority)
  {
	  this.authority = authority;
  }
  
  public String getAuthority()
  {
	  return authority;
  }
}