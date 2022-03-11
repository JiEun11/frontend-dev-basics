/* 
  구조 분해 (Destructing)
*/

// ex01 - basic
const user = {
  firstName: '둘',
  lastName: '리',
  email: 'dooly@gmail.com'
};

// user.firstName; 대신 변수 하나로 사용해보기 
// let firstName = user.firstName;
// let lastName = user.lastName;
let {firstName, lastName} = user;   // 대상과 변수이름을 동일 시 할 경우 바로 사용 가능 

console.log(firstName, lastName);

// ex02 - Default Value
const goods = {
  name: 'TV',
  price: 10000,
  stockCount: 100
};

let {name, price, countStock=0, stockCount=0 } = goods;

console.log(name, price, countStock, stockCount);

// ex03 - 구조분해 해야할 객체의 속성과 변수 이름이 다를 때
const person = {
  name:'지은',
  country: 'Korea'
}

let {name: fullName, country: nation} = person;
console.log(fullName, nation);


// ex04 - 내부 객체(Nested Object)의 구조 분해 
const student = {
  name: '지은',
  age: 24,
  score: {
    math: 100,
    kor: 100,
    eng: 100
  }
}
const { name: studentName, score: {math=0, kor=0, eng=0, science=0}} = student
console.log(`\n${studentName}(이)의 성적
  수학: ${math}
  국어: ${kor}
  영어: ${eng}
  과학: ${science}
`);

// ex05 - 함수의 파라미터 
const average = function({ name: studentName, score: {math=0, kor=0, eng=0, science=0}}){
  console.log(`${studentName}(이)의 평균은 ${(math+kor+eng+science) / 4}`);
};

average(student);


// ex06 - array (추후에..나오면 다룰 예정)
