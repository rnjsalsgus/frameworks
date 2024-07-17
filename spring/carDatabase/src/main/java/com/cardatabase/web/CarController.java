package com.cardatabase.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cardatabase.cardatabase.domain.Car;
import com.cardatabase.cardatabase.domain.CarRepository;

@RestController
public class CarController {
	
	@Autowired
	private CarRepository carRepo;
	
	// 모든 자동 객체를 반환하며, 이는 Jackson라이브러리에 의해 JSON객체로 변환
	@GetMapping(value="/cars")
	public Iterable<Car> getCars(){
		return carRepo.findAll();
	}
}
