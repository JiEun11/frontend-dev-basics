package com.poscoict.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.UserVo;

@RestController // response body 안 붙여도 된다.
@RequestMapping("/api/user")
public class RestApiController {
	
	@PostMapping("")
	public Object create(@RequestBody UserVo vo) {
		vo.setNo(1L);
		vo.setPassword(""); //password는 계속 교환하는거 안 좋음
		
		return JsonResult.success(vo);
	}
	
	
	@GetMapping("")	// "" 비어있다는 건 : user를 다 가져와라 
	public Object read() {
		List<UserVo> list = new ArrayList<>();
		
		UserVo vo1 = new UserVo();
		vo1.setNo(1L);
		vo1.setName("dooly");
		list.add(vo1);
		
		UserVo vo2 = new UserVo();
		vo2.setNo(1L);
		vo2.setName("GilDong");
		list.add(vo2);
		
		return JsonResult.success(list);
	}
	
	
	@GetMapping("/{no}")	// "" 비어있다는 건 : user를 다 가져와라 
	public Object read(@PathVariable("no") Long no) {
		System.out.println("no: " + no);
	
		UserVo vo2 = new UserVo();
		vo2.setNo(1L);
		vo2.setName("GilDong");
		
		return JsonResult.success(vo2);
	}
	
	@PutMapping("/{no}")
	public Object update(@PathVariable("no") Long no, @RequestBody UserVo vo) {
		System.out.println("no: " + no);
		System.out.println("userVo : " + vo);
		
		vo.setNo(no);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@DeleteMapping("/{no}")
	public Object delete(
			@PathVariable("no") Long no, 
			@RequestParam(value="password", required=true, defaultValue="") String password) {
		
		System.out.println("no : " + no);
		System.out.println("Password : " + password);
		return JsonResult.success(no);
	}
}
