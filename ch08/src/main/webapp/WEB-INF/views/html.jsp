<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HTML jsp</title>
<title>text.jsp</title>
<script type="text/javascript" src='${pageContext.request.contextPath }/jquery/jquery-3.6.0.js'></script>
<script>
$(function(){
	$('button').click(function(){
		$("p").load("${pageContext.request.contextPath }/api/html p"); // 원하는 태그 요소만 추출 가능 
		console.log("click");
	});
})
</script>
</head>
<body>
	<h1>AJAX Test : HTML Format Data</h1>
	
	<button>변경</button>
	<p>변경 전</p>
</body>
</html>