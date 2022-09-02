package hu.dorkarn02.backend.controllers;

import hu.dorkarn02.backend.models.Employee;
import hu.dorkarn02.backend.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController {
    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employee")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
    @GetMapping("/employee/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable long id){
        return employeeService.getEmployeeById(id);
    }
    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.addEmployee(employee);
    }
    @DeleteMapping("/employee/{id}")
    public void removeEmployee(@PathVariable long id){
        employeeService.removeEmployee(id);
    }
    @PutMapping("/employee/{id}")
    public void updateEmployee(@RequestBody Employee employee){
        employeeService.updateEmployee(employee);
    }
}
