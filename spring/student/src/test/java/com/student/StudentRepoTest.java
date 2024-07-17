package com.student;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class StudentRepoTest {
	
	@Autowired
	StudentRepo studentRepo;
	
	@Test
	public void addStu() {
		Student stu=new Student();
		stu.setName("서승찬");
		stu.setAddr("해운대구");
		stu.setMajor("컴공");
		stu.setPhone("010-0000-0000");
		stu.setStuId(20135522);
		studentRepo.save(stu);
		
		Student stu1=new Student();
		stu1.setName("승찬");
		stu1.setAddr("해운대구");
		stu1.setMajor("컴공");
		stu1.setPhone("010-0000-0000");
		stu1.setStuId(20135522);
		studentRepo.save(stu1);
		
		Student stu2=new Student();
		stu2.setName("서승");
		stu2.setAddr("해운대구");
		stu2.setMajor("생물학");
		stu2.setPhone("010-0000-0000");
		stu2.setStuId(20135522);
		studentRepo.save(stu2);
		
	}
	
	
	@Test
	void getStu() {
		System.out.println(studentRepo.findByName("권민현"));
	}

}
