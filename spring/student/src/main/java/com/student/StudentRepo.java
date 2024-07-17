package com.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
public interface StudentRepo extends JpaRepository<Student, Long>{
	List<Student> findByName(String name);
}
