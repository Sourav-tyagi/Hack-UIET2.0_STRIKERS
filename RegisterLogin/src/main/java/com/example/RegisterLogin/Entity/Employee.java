package com.example.RegisterLogin.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="employee")

public class Employee {
    @Id
    @Column(name = "employee_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeid;
    @Column(name = "employee_name", length = 255,nullable = false)
    private String employeename;

    @Column(name = "user_name", length = 255,nullable = false,unique = true)
    private String username;
    @Column(name = "email", length = 255,nullable = false,unique = true)
    private String email;
    @Column(name = "password", length = 255,nullable = false)
    private String password;


    public Employee(int employeeid, String employeename, String username, String email, String password) {
        this.employeeid = employeeid;
        this.employeename = employeename;
        this.username = username;
        this.email = email;
        this.password = password;
    }


//create getters and setters
    public Employee(){}
    public int getEmployeeid() {
        return employeeid;
    }

    public void setEmployeeid(int employeeid) {
        this.employeeid = employeeid;
    }

    public String getEmployeename() {
        return employeename;
    }

    public void setEmployeename(String employeename) {
        this.employeename = employeename;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeid=" + employeeid +
                ", employeename='" + employeename + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

