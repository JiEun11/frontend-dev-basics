package com.poscoict.ch08.controller.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	
}
