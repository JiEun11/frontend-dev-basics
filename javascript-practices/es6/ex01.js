/**
 * let : Block Scope의 변수
 */

try {
  if(true){
    var i = 10;   //function scope
    let j = 20;   // block scope
  }

  console.log(i, j);
} catch (error) {
  console.log('[error] : ' + error);
}

/* cf. var의 함수 범위 */
try {
  let f = function(){
    var m = 20;
    // m = 20; 은 접근이 됨.
    let n = 10;
  }
  
  f(); // var m = 20; 이 실행됨
  
  console.log(m);
  console.log(n);
    
} catch (error) {
  console.log('[error] : ' + error);
}