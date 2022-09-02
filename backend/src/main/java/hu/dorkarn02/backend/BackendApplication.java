package hu.dorkarn02.backend;

import hu.dorkarn02.backend.models.Employee;
import hu.dorkarn02.backend.models.enums.Gender;
import hu.dorkarn02.backend.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Calendar;
import java.util.Date;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    @Autowired
    public BackendApplication(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    private final EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) {
        Employee test = Employee.builder().first_name("John")
                .last_name("Doe")
                .country("Hungary")
                        .email("johndoe@gmail.com").build();

        employeeRepository.save(test);
    }
}
