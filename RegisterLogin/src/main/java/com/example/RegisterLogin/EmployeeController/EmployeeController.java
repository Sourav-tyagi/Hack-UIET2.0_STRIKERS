package com.example.RegisterLogin.EmployeeController;
import com.example.RegisterLogin.Dto.EmployeeDTO;
//import com.example.RegisterLogin.Dto.LoginDTO;
import com.example.RegisterLogin.Dto.LoginDTO;
import com.example.RegisterLogin.Entity.Employee;
import com.example.RegisterLogin.Service.EmployeeService;
//import com.example.RegisterLogin.response.LoginResponse;
import com.example.RegisterLogin.response.LoginResponse;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:5051")
@RequestMapping("api/v1/employee")
//@ComponentScan
@Service
public class EmployeeController {
    @Autowired                                 // creating error of defining beans in the configuration

    private EmployeeService employeeService;
    @CrossOrigin()
    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO)
    {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }


    // @GetMapping(path = "/get")
    @CrossOrigin
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}

