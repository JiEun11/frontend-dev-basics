/**
 * Array 확장(prototype 기반의 확장): List method 추가 
 */

Array.prototype.insert = function(index, value){
  if(value instanceof Array){
    // for(var i = 0; i < value.length; i++){
    //   this.splice(index++, 0, value[i]);
    // }

    // 오류!!
    // callback 안의 this는 예측 못 한다.(어휘 상의 this와 일치X)
    // value.forEach(function(e){
    //   this.splice(index++, 0, e); // error : this.splice is not a function
    // });

    // 해결 방법1
    // var _this = this;  (어휘 상의 this를 변수로 설정하고 사용)
    // value.forEach(function(e){
    //   _this.splice(index++, 0, e); 
    // });

    // 해결 방법2 : 함수의 bind로 실행 때의 this를 설정 해줄 수 있다.
    value.forEach(function(e){
      this.splice(index++, 0, e);
    }.bind(this));  // 지금 호출하는게 아니라 나중에 세팅해줘라 이거임 

  }else{
    this.splice(index, 0, value);
  }
}

Array.prototype.remove = function(index){
  this.splice(index, 1);
}

// List로 사용하기 
var a = [1, 2, 4];

console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2,['a','b','c']);  // expectation: [1,2,'a','b','c']
console.log(a);             // result : [ 1, 2, [ 'a', 'b', 'c' ], 3 ]

