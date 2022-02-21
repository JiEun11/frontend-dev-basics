/*
 *  구문(statement)
  1. Java 실행 단위
  
  2. 구문의 구성 요소 
    - 값, 연산자(.:객체 접근 연산자,==)
    - 주석 : 구문을 구성해도 실행되지 않는다.
    - 예약어 : if, const, for, ...
  
    3. 구문의 예
    - 주석 구문
    - if(1-1 == 0){ }
    - if ~ else
    - switch
    - for, while, do~while, for~in

    4. 공백 : 토큰 분리 
    10101010 d

    5. 세미콜론 ;
    - 원칙적으로는 구문을 분리한다.
    - 표현식을 표현식구문으로 만들어서 표현식을 실행하게 한다.

    6. 개행 \n
    - 역할1 : ;를 대체
    - 역할2 : 토큰을 분리
    - 어쩔 때 1이고 2일까? 
      - 상황에 따라서 JavaScript Engine의 parser가 에러없는 실행을 
        우선 원칙으로 1인지 2인지 판단해 낸다.
 */

// i = 10; // 바로 실행한다.
// i = 10  // ; 안 붙이면 
// var s = "hello world"; console.log(s);

// 개행의 역할1 : ;를 대체
// 개행의 역할2 : 토큰을 분리

// 역할1 : ;를 대체함 
var s = "hello world"   // 개행을 만남, ; or 분리? 뭐로 할까 
console.log(s)          // 이 떄에는 개행을 ;로 대체하여 실행함 

// 역할2 : 토큰 분리
a
=
2
+
2
console.log(a);

// error
// con --> con is not defined
// sole.log(s)  

// 함수 끝에도 ; 붙이자 
o = {

};

f = function(){

};

// 구문 뒤에는 ; 붙이면 에러난다. 구문 parsing 후 ;만 남기 때문
// if(){

// };