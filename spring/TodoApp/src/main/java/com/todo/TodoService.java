package com.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
	
	@Autowired
	TodoRepo todoRepo;

//	@Autowired
//	public TodoService(TodoRepo todoRepo) {
//		this.todoRepo = todoRepo;
//	}
	
//	DB에 있는 전체 데이터 가져오기
	public List<TodoEntity> getTodos(){
		return todoRepo.findAll();
	}
	
//	사용자에게 입력 받은 데이터를 DB에 저장
	public void putTodo(TodoEntity todoEntity) {
		todoRepo.save(todoEntity);
	}
	
//	받은 id값으로 삭제하기
	public void deleteTodo(Integer id) {
		todoRepo.deleteById(id);
	}
//	id값을 이용하여 하나의 todo를 가져오기
	public TodoEntity getTodo(Integer id) {
		return todoRepo.findById(id).get();
	}

}
