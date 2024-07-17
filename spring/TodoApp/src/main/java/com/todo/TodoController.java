package com.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TodoController {
	
	@Autowired
	TodoService todoService;
	
//	get방식 요청: 주소창에 데이터가 노출
//	post방식 요청: 주소창에 데이터가 노출 안됨
//	@GetMapping("/")
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String getTodos(Model model) {
//		for(TodoEntity todoEntity:todoService.getTodos()) {
//			System.out.println(todoEntity);
//		}
		model.addAttribute("todos", todoService.getTodos());
		return "todos";
	}
		
	@PostMapping("/put")
//	public String putTodo(String content) {
	public String putTodo(TodoEntity todoEntity) {
//		System.out.println(todoEntity);
		if(todoEntity.getCompleted()==null) {
			todoEntity.setCompleted(false);			
		}
		todoService.putTodo(todoEntity);
//		System.out.println(todoEntity);
		return "redirect:/";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteTodo(@PathVariable Integer id) {
//		System.out.println(id);
		todoService.deleteTodo(id);
		return "redirect:/";
	}
	@GetMapping("/update/{id}")
	public String updateTodo(@PathVariable Integer id,Model model) {
		System.out.println(id);
//		todoService.updateTodo(id);
//		id 값을 이용하여 한 개의 todo 가져오기
		TodoEntity todoEntity=todoService.getTodo(id);
		model.addAttribute("todo", todoEntity);
		return "update-todo";
	}
	
	@GetMapping("/updateCompleted")
	public String updateCompleted(TodoEntity todoEntity) {
//		completed 속성만 반전시켜 DB에 수정
//		todoEntity.setCompleted(!todoEntity.getCompleted());
		System.out.println(todoEntity);
//		todoService.putTodo(todoEntity);
		return "redirect:/";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
