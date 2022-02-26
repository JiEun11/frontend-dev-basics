<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>json01.jsp</title>
<script type="text/javascript" src='${pageContext.request.contextPath }/jquery/jquery-3.6.0.js'></script>
<script>
$(function(){
	$('button').click(function(){
		$.ajax({
				url: "${pageContext.request.contextPath }/api/json",
				async: true,
				type: 'get',
				dataType: 'json',
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
		<h1>AJAX Test : JSON Format Data</h1>
	
	<button>데이터 가져오기</button>
	<div id="data">
		
	</div>
</body>
</html>