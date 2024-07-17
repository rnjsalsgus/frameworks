package com.cardatabase.cardatabase.domain;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CarRepositoryTest2 {

	@Autowired
	CarRepository carRepo;
	
	@Test
	void brandTest() {
		for(Car car:carRepo.findByBrand("Toyota")) {
			System.out.println(car);
		}
	}

}
