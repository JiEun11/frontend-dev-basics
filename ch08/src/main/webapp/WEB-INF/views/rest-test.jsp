<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>rest-test.jsp</title>
<script type="text/javascript"
	src='${pageContext.request.contextPath }/jquery/jquery-3.6.0.js'></script>
<script>
	$(function() {
		$("#create").click(function() {
			var vo = {
				name : "둘리",
				email : "dooly@gmail.com",
				password : "1234",
				gender : "male"
			}

			$.ajax({
				url : "${pageContext.request.contextPath }/api/user",
				async : true,
				type : 'post', // request method
				dataType : 'json', // response format (data type)
				contentType : 'application/json',
				data : JSON.stringify(vo), // 객체를 string으로 바꿔주는  
				success : function(response) { //response가 json 객체로 
					console.log(response);

				}
			});
		});

		$("#read").click(function() {
			$.ajax({
				url : "${pageContext.request.contextPath }/api/user",
				async : true,
				type : 'get', // request method
				dataType : 'json', // response format (data type)  
				success : function(response) { //response가 json 객체로 
					console.log(response);

				}
			});
		})

		$("#update").click(function() {

			var vo = {
				name : "dooly",
				password : "1234",
				gender : "female"
			}

			$.ajax({
				url : "${pageContext.request.contextPath }/api/user/10",
				async : true,
				type : 'put', // request method
				dataType : 'json', // response format (data type)
				contentType : 'application/json',
				data : JSON.stringify(vo), // 객체를 string으로 바꿔주는 
				success : function(response) { //response가 json 객체로 
					console.log(response);

				}
			});
		});
		
		$("#delete").click(function() {

			$.ajax({
				url : "${pageContext.request.contextPath }/api/user/10",
				async : true,
				type : 'delete', // request method
				dataType : 'json', // response format (data type)
				contentType : 'application/x-www-form-urlencoded',
				data : "password=1234", // form data  
				success : function(response) { //response가 json 객체로 
					console.log(response);
				}
			});
		});

	})
</script>
</head>
<body>
	<h1>AJAX Test : Restful API</h1>

	<button id="create">Create(POST)</button>
	<br />
	<br />

	<button id="read">Read(GET)</button>
	<br />
	<br />

	<button id="update">Update(PUT)</button>
	<br />
	<br />

	<button id="delete">Delete(DELETE)</button>
	<br />
	<br />

</body>
</html>