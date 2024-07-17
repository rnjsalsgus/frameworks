package com.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
	@Autowired
	private StudentRepo studentRepo;
	
	@GetMapping(value="/students")
	public Iterable<Student> getStudents(){
		return studentRepo.findAll();
	}
}
