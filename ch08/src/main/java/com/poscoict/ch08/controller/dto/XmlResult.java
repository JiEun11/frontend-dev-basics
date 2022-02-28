package com.poscoict.ch08.controller.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="response")
public class XmlResult {

	private String result;
	private GuestbookVo data;
	private String message;
	
	private XmlResult() {
		
	}
	
	
	private XmlResult(String result, GuestbookVo data) {
		this.result = result;
		this.data = data;
	}


	private XmlResult(String result, String message) {
		this.result = result;
		this.message = message;
	}


	
	public static XmlResult success(GuestbookVo vo) {
		return new XmlResult("success", vo);
	}
	public static XmlResult fail(String message) {
		return new XmlResult("fail",message);
	}
	
	/* getter setter */
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public GuestbookVo getData() {
		return data;
	}
	public void setData(GuestbookVo data) {
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	// 내부 클래스 전용으로 만든다.
	@XmlRootElement(name="data")
	public static class GuestbookVo {
		private Long no;			// 게시판 글 번호
		private String name; 	// 사용자 이름
		private String password; // 사용자 비번 
		private String regDate; // 글 등록날짜
		private String message; // 게시판 글 
		
		public Long getNo() {
			return no;
		}
		public void setNo(Long no) {
			this.no = no;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getRegDate() {
			return regDate;
		}
		public void setRegDate(String regDate) {
			this.regDate = regDate;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		
		@Override
		public String toString() {
			return "GuestbookVo [no=" + no + ", name=" + name + ", password=" + password + ", regDate=" + regDate
					+ ", message=" + message + "]";
		}
	}
}
