package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class SpringDemo1Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringDemo1Application.class, args);
	}
	
	@GetMapping(value="/test")
	public UserDto test() {
		UserDto userDto=new UserDto();
		userDto.setName("김자바");
		userDto.setAge(20);
		System.out.println(userDto.toString());
		return userDto;
	}
}
// 우클릭 > run as > spring boot  