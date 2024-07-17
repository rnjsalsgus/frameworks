package com.todo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TodoRepoTest {

	@Autowired
	TodoRepo todoRepo;
	
	@Test
	void testSave() {
		TodoEntity todoEntity=new TodoEntity();
		todoEntity.setContent("스프링 부트 공부");
		todoEntity.setCompleted(false);
		todoRepo.save(todoEntity);
		
		TodoEntity todoEntity1=new TodoEntity();
		todoEntity1.setContent("Todo 리스트 만들기");
		todoEntity1.setCompleted(false);
		todoRepo.save(todoEntity1);
		
	}

}
