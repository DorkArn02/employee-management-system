package hu.dorkarn02.backend.services;

import hu.dorkarn02.backend.models.Employee;
import hu.dorkarn02.backend.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository repository;

    @Autowired
    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> getAllEmployees(){
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(long id){
        return repository.findById(id);
    }

    public Employee addEmployee(Employee employee){
        return repository.save(employee);
    }

    public void removeEmployee(long id){
        repository.deleteById(id);
    }

    public void updateEmployee(Employee employee){
         repository.findById(employee.getId())
                .ifPresent(emp -> {
                    repository.save(employee);
                });
    }
}
