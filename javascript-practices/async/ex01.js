const ex01 = function(param, callback){
  /* 
    비동기 코드 : 파일 시스템 접근, network 통신, SQL to DB, setTimeout
  */
  setTimeout(function(){  // 비동기 코드로 setTimeout을 임의로 사용함, DB나 network 통신 등 사용할 수 없으니...
    if(param === 'param-data'){
      callback(null,'ok'); //error 없으면 null 넣고 결과는 ok
    }else{
      callback(new Error('fail'), null);
    }
  },2000);
}

// test01 : success
ex01('param-data',function(error, result){
  // result를 주면 그걸 처리하는 코드를 여기에
  if(error){
    console.log(error);
  } else{
    console.log(result);
  }
});
// console.log("wait....");

// test01 : fail
ex01('...param-error...',function(error, result){
  // result를 주면 그걸 처리하는 코드를 여기에
  if(error){
    console.log(error);
  } else{
    console.log(result);
  }
});
console.log("wait....");