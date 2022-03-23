const fetch = function(param){
  return new Promise(function(resolve, reject){ // 동기로 막아놓고 반드시 return 할꺼다.
    /* 
    비동기 코드 : 파일 시스템 접근, network 통신, SQL to DB, setTimeout
    */
    setTimeout(function(){  // 비동기 코드로 setTimeout을 임의로 사용함, DB나 network 통신 등 사용할 수 없으니...
      if(param === 'param-data'){
        resolve('ok'); //error 없으면 null 넣고 결과는 ok
      }else{
        reject(new Error('fail'));
      }
      },2000);
    }); 
}

if(require.main == module){   //단독으로 실행될 때, node ex02로 실행 시
  // test01 : success
  fetch('param-data').then(function(result){
    console.log(result);
  })

  // test01 : fail
  fetch('...param-error...').catch(function(error){
    console.error(error);
  });

  // 일반적으로 아래처럼 사용
  // fetch('param....')
  //   .then(result => {

  //   })
  //   .catch(error => {

  //   }); 

  console.log("wait....");
}else{ // require 해서 땡겨올 경우
  module.exports = fetch;
}

