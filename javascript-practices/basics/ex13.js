/**
 * String primitive type과 String 객체 메소드(String.prototype.*) : Object type의 객체인데 String instance다.
 */

s = "hello";
s.substring(); // new String(s).substring()으로 바뀌고 실행됨.

// 배열처럼 접근이 가능하다.
var str1 = 'hello world';
for(var i = 0; i < str1.length; i++){
  console.log(str1[i]);
}

// 문자열 합치기 
var str2 = 'Hello';
var str3 = 'World';
var str4 = str2 + ' ' + str3; // new StringBuffer(str2).append(' ').append(str3).toString();
console.log(str4);

