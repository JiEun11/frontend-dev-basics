/* null(object type의 객체)과 undefined(기본 타입) */
var myVar1 = undefined; // 명시적으로 undefinded 대입 
var myVar2;             // 암시적으로 undefinded 대입 
var myVar3 = null;      // Null 객체를 대입 

console.log(myVar1 + " : " + myVar3);
console.log(typeof(myVar1) + ":" + typeof(myVar3));

console.log(myVar1 == myVar3);
console.log(myVar1 === myVar3);

console.log("==================================");

// == : equality, 값의 동치성, 형변환
console.log(4 == '4');
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10); // 11
console.log('abc' + new String('abc')); //abcabc
console.log(1 + "1"); // 11     number -> string 
console.log("1" + 1 );  // 11   number -> string

console.log("==================================");
// === : identity 
// 1. 타입의 동일성 + 값의 동일성 : 원시타입일 때
// 2. 객체의 동일성 : 객체일 때 
console.log("2" === 2);
console.log(true === 1);
console.log(2 === 4 );
console.log(new Number(4) === new Number(4));
console.log(new Number(4) == new Number(4));