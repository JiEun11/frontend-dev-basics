package com.poscoict.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.dto.XmlResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

  @ResponseBody
  @RequestMapping("/text")
  public String text() {
    return "Text data";
  }

  @ResponseBody
  @RequestMapping("/html")
  public String html() {
    return "<h1>AJAX 연습</h1><p>HTML data</p>";
  }

  @ResponseBody
  @RequestMapping("/xml")
  public XmlResult xml() {
	XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
	vo.setNo(1L);
	vo.setName("둘리");
	vo.setMessage("hoy");
    return XmlResult.success(vo);
  }
  
  @ResponseBody
  @RequestMapping(value = "/json", method = RequestMethod.GET)
  public JsonResult json() {
    // 객체 mapping을 Message Converter에서 못 하므로 error 나오는 상황
    // Jackson을 설정해서 한글이 변환되도록 해야함
    GuestbookVo vo = new GuestbookVo();
    vo.setNo(1L);
    vo.setName("Bella");
    vo.setMessage("Hola");

    // JsonResult jsonResult = new JsonResult();
    // jsonResult.setResult("ok");

    return JsonResult.success(vo);
    // return JsonResult.fail("Exception...");
  }

  @ResponseBody
  @RequestMapping(value = "/post01", method = RequestMethod.POST)
  public JsonResult post01(GuestbookVo vo) {
    System.out.println(vo);

    // service -> repository: DV insert 성공한 후,
    vo.setNo(1L);
    vo.setPassword(""); // password 지워버리기

    return JsonResult.success(vo);
  }
  
  @ResponseBody
  @RequestMapping(value = "/post02", method = RequestMethod.POST)
  public JsonResult post02(@RequestBody GuestbookVo vo) {
    System.out.println(vo);

    // service -> repository: DV insert 성공한 후,
    vo.setNo(1L);
    vo.setPassword(""); // password 지워버리기

    return JsonResult.success(vo);
  }
}
