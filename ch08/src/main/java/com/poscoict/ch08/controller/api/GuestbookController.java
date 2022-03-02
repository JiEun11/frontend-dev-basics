package com.poscoict.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api/guestbook")  
public class GuestbookController {
	
	@ResponseBody
	@RequestMapping(value="/add", method=RequestMethod.POST) // 과제는 Restful 하게 
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
		// guestbookService.addMessage(vo); 
		vo.setNo(1L);	// mock setting for testing
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
