// Whole-script strict mode syntax
// typescript 쓸 때는 필요없음, vanilla js는 꼭 써주기
// JavaScript is very flexible
// flexible === dangerous
'use strict';
console.log('hello world');

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
  let name = "bella";
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}

// console.log(name);
console.log(globalName);

// var (don't ever use this!!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants
// favor immutable data type alwyas for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : Number, String, Boolean, null, undefined, symbol
// object(gathered single items), box container
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// Number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't user it yet)
const bigInt = 1234567788995234242343243424; // over (-2*53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`;  //template literals(String)
console.log(`value: ` + helloBob + ` type: ` + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 <  1;  // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const bella = {name: 'bella', age: 20};
bella.age = 21;

// 5. Dynamic typing : gynamically typed language
let text = 'hello';
console.log(text.charAt(0));  //h
console.log(`value: ${text} , type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));  // 현재 text = 4 인 상태라 error 발생


