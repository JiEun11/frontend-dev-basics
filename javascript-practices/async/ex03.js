const fetch = require('./ex02');

const ex03 = async function(param){
  try{
    const res = await fetch(param);    // res 처리를 위해 함수 안에서 사용
    console.log(res);
  } catch(error){
    console.error('error');
  }
}

ex03('param-data');
ex03('param-error');
console.log('wait....');