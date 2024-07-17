package com.cardatabase.cardatabase.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface CarRepository extends JpaRepository<Car, Long>{
	// 브랜드로 자동차 검색
	List<Car> findByBrand(String brand);
}
