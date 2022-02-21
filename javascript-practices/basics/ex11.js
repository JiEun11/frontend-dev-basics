/**
 * Array Method(Array.prototype)
 */

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push : stack 지원
var color = colors.pop();
console.log(`color:${color}, colors:${colors}`);

colors.push('red');
console.log(`colors: ${colors}`);

// join
var str = fruits.join(":");
console.log(str);

// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 2000, 3000, 4000, 7000, 8000, 5000];
var number = numbers.shift();
console.log(`number: ${number}, numbers: ${numbers}`);

// sort
numbers.sort();
console.log(numbers);

// slice
numbers = numbers.slice(1,3);   // 1부터 3-1까지
console.log(numbers);

// splice
// index부터 count 개를 삭제한 후, 삭제된 요소를 반환
console.log(fruits);
var fruits2 = fruits.splice(0/*index*/, 2/*count*/);
console.log(fruits2, fruits);

// index부터 count 개를 삭제한 후, replace로 대체, 삭제된 요소를 반환
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1/*index*/, 3/*count*/, 10/*replace*/);
console.log(a2, a1);

// a1.removeAt(1)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1,1); //1번 1개를 잘라낸다? 
console.log(a2, a1);

// a1.insertAt(1, 10)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10);
console.log(a2, a1);

