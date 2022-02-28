package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class ApiTestController {

  // HTTP Text(String) Message Converter
  @RequestMapping("/text")
  public String text() {
    return "text";
  }
  //HTTP Text(String) Message Converter
  @RequestMapping("/html")
  public String html() {
    return "html";
  }

  @RequestMapping("/xml")
  public String xml() {
    return "xml";
  }
  
  // JSON Message Converter 
  @RequestMapping("/json01")
  public String json01() {
    return "json01";
  }

  @RequestMapping("/json02")
  public String json02() {
    return "json02";
  }

  @RequestMapping("/json03")
  public String json03() {
    return "json03";
  }
  
  @RequestMapping("/json04")
  public String json04() {
    return "json04";
  }
}
