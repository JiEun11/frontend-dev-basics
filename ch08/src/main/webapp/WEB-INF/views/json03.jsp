<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>json03.jsp</title>
<script type="text/javascript" src='${pageContext.request.contextPath }/jquery/jquery-3.6.0.js'></script>
<script>
$(function(){
	$('button').click(function(){
		var vo = {
				name: '둘리',
				password: '1234',
				message: '호이~'
		};
		
		$.ajax({
		
				url: "${pageContext.request.contextPath }/api/post01",
				async: true,
				type: 'post', // request method
				dataType: 'json', 	// response format (data type)
				contentType: 'application/x-www-form-urlencoded',	// default
				data: $.param(vo),	// param을 넣으면 Data 객체로 바꿔주는? 
				
				success: function(response){ //response가 json 객체로 
					console.log(response);
					if(response.result !== "success"){
						console.error(response.message);
						return;
					}
					
					var html ="";
					html += ("<h1>" + response.data.no + "</h1>");
					html += ("<h2>" + response.data.name + "</h2>");
					html += ("<h3>" + response.data.message + "</h3>");
					
					$("#data").append(html);
					// or $("#data").html
				}
			});
	});
});
</script>
</head>
<body>
		<h1>AJAX Test : JSON Format Data : $.ajax 함수 사용하기 (post,form data) </h1>
	
	<button>데이터 가져오기</button>
	<div id="data">
		
	</div>
</body>
</html>