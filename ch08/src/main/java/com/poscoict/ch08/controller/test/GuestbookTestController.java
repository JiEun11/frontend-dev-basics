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

	// 2. list
	@RequestMapping("/ex02")
	public String ex02() {
		return "guestbook/ex02";
	}

	// 2. delete
	@RequestMapping("/ex03")
	public String ex03() {
		return "guestbook/ex03";
	}
}
