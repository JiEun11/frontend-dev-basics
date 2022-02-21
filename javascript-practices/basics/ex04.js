/*
변수의 범위 (Scope)
1. JavaScript는 어휘에서 변수의 범위를 알 수 있다. (Lexical Scope)
2. ES6 이전 (<= ES5)
  - Java와 같은 블록 범위를 지원하지 못 했다.
  - 함수 범위만 지원 
  - function() {...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
  - 만약에 var 키워드 없이 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다.
    ---> hoisting (호이스팅)

3. ES6 이후
  - Block Scope를 적용할 수 있는 두 개의 키워드를 지원(let,const)
  - let : 변수 
  - const : 상수 

4. 결론
  - const / let만 사용하고 반드시 붙이자. (if not add, hoisting)

*/

var i = 10;
var f = function(){
  var i = 20;
  j = 100;
  i = j - 1;
  console.log(`i 지역 호출 : ${i}`);
}

// var 키워드는 함수 블록에서 함수 범위만 가지게 할 때 적용 된다.
if(90 + 10 ==100){
  var k = 20;
}

{
  let x = 1000000;
  const PI = 3.14;
  x = 100;

  //PI = 0;
}

// error : 접근이 안 된다.
// console.log(x);
// console.log(PI);

f();
console.log(`i 전역 호출  : ${i}`);
console.log(`j : ${j}`);
console.log(`k : ${k}`);

o = 10;
o;

// p; error 발생 , 표현식임 
var p;  // 표현식이 아님 