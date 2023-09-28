package com.example.RegisterLogin.Service;

import com.example.RegisterLogin.Dto.EmployeeDTO;
import com.example.RegisterLogin.Dto.LoginDTO;
import com.example.RegisterLogin.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


// @Service

public interface EmployeeService {
    @Autowired

    String addEmployee(EmployeeDTO employeeDTO);
    @Autowired
    LoginResponse loginEmployee(LoginDTO loginDTO);


}
