<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>rest-test.jsp</title>
<script type="text/javascript" src='${pageContext.request.contextPath }/jquery/jquery-3.6.0.js'></script>
<script>
$(function(){
	
})
</script>
</head>
<body>
	<h1>AJAX Test : Restful API</h1>
	
	<button id="create">Create(POST)</button>
	<br /><br />
	
	<button id="read">Read(GET)</button>
	<br /><br />
	
	<button id="update">Update(PUT)</button>
	<br /><br />
	
	<button id="delete">Delete(DELETE)</button>
	<br /><br />
	
</body>
</html>