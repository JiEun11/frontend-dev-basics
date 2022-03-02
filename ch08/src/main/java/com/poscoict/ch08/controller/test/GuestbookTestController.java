package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/guestbook")
public class GuestbookTestController {
	
	// 1. add 
	@RequestMapping("/ex01")
	public String ex01() {
		return "guestbook/ex01";
	}
}
