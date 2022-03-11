/* 
  name & unamed export
*/

const add = function(a, b){
  return a + b;
}

const substract = function(a, b){
  return a - b;
}

const divide = function(a, b){
  return a / b; 
}

export {add, substract, divide}     // 분해 가능 

export default {add, substract, divide}; // 분해 불가능
