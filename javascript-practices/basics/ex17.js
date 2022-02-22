console.log("+++++++++++++ global object ++++++++++++++");

global.name  = '둘리';
console.log(name, global.name);

// cf
let email = 'dooly@gmail.com';
console.log(email, global.email);

console.log("===== function의 객체 메소드 apply =====");
var f1 = function(){
  console.log(this);
};

f1();

// this 바꾸기
var o = {
  name: '마이콜'
};

f1.apply(o);

console.log("===== function의 객체 메소드 call : 실행 때 this를 바꾼다=====");
var f2 = function(s1,s2){
  console.log(s1+" , " + s2 + " , " +this.name);
};

f2('hi', ''); //이 때 this는 global
f2.call(o, 'hi', 'again');
f2.apply(o, ['hi','again']);  // parameter 없는 경우에는 apply, 넘길 수 있는데 배열로 넘겨야한다.
// f2.call(o, 'hi hello');  // parameter가 있는 경우에는 call 쓰는게 좋음 