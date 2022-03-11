/* 
  named export1

  exports(require.js)와 유사하다. 이 모듈을 import 할 때에는 destructing이 가능하다.
*/

const add = function(a, b){
  return a + b;
}

const substract = function(a, b){
  return a - b;
}

export {add, substract};

// ES6 : 객체 단축화 
// o = {
//   add,
//   substract
// }