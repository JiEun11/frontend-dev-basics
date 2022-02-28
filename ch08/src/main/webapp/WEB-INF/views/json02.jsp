<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>json02.jsp</title>
<script type="text/javascript" src='${pageContext.request.contextPath }/jquery/jquery-3.6.0.js'></script>
<script>
// DOM Load Event
// 1. load : DOM뿐만이 아니라 CSSOM, Image 등 모두 다 로딩이 된다. 
// 2. DOMContentLoaded : DOM만 로딩(CSSOM, Image 등 로딩 X) 
window.addEventListener("DOMContentLoaded", function(){
		document
			.getElementsByTagName("button")[0]
			.addEventListener("click", function(){
				
				/* xhr 객체 생성 */
				var xhr = null; // use strict 모드 대비해서 undefined 대신 Null로 셋팅 
				if(window.ActiveXObject){	 	// <= IE9
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}else if(window.XMLHttpRequest){
					xhr = new XMLHttpRequest(); // Standard Browser	
				}else{
					console.log('Ajax 기능을 사용할 수 없는 브라우저 입니다.');
				}
				
				/* xhr에 event 걸기 */
				xhr.addEventListener('readystatechange',function(){
					if(this.readyState == XMLHttpRequest.UNSENT){  // readyState = 0
						// request가 초기화 되기 전 
						console.log('State: UNSENT');
					} else if(this.readyState == XMLHttpRequest.OPENED){ // readyState = 1
						// server와 연결이 성공 
						console.log('State: OPENED');
					} else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED){ // readyState = 2
						// 서버가 request를 받음 
						console.log('State: HEADERS_RECEIVED');
					} else if(this.readyState == XMLHttpRequest.LOADING){ // readyState = 3
						// response 처리 중 (Response body parsing 중..)
						console.log('State: LOADING');
					} else if(this.readyState == XMLHttpRequest.DONE){ // readyState = 4
						// response 처리가 끝남 (Response body parsing 완료)
						console.log('State: DONE');
						
						if(this.status != 200){
							console.error("error: " + this.status);
							return;
						}
						
						console.log(this.responseText, typeof(this.responseText));
						var response = JSON.parse(this.responseText);  // 웬만해선 쓰지 말자 
						console.log(response, typeof(response));
						
						var html ="";
						html += ("<h1>" + response.data.no + "</h1>");
						html += ("<h2>" + response.data.name + "</h2>");
						html += ("<h3>" + response.data.message + "</h3>");
						
						// $("#data").append(html);
						// or $("#data").html 대신에 아래 DOM API 사용 
						
						document
							.getElementById('data')
							.innerHTML += html;
					}
					
				});
				
				xhr.open('get','${pageContext.request.contextPath }/api/json', true); // true: 비동기로 하겠냐 ㅇㅇ 
				xhr.send();
				
				
			});

});

</script>
</head>
<body>
		<h1>AJAX Test : JSON Format Data : XMLHttpRequest를 직접 사용하기 </h1>
	
	<button>데이터 가져오기</button>
	<div id="data">
		
	</div>
</body>
</html>