package com.example;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

// Lombok 라이브러리
/* 이 라이브러리는 반복적인 Getter/Setter, ToString과 같은 반복적인 자바 코드를
 컴파일과 개발환경에서도 자동으로 생성해주는 라이브러리 */
@Getter
@Setter
@ToString
public class UserDto {
	private String name;
	private int age;
}