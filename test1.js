//1 what is the output of the following exressions?
typeof NaN; --> 'number'
typeof 'str' --> 'string'
typeof null --> 'object'
//answar --> a;

//2 which will be the output?
var i = 0;
for(let j = 0; j < 5 && i < 4; j++,i++){
  //statement
}
console.log(i); //4 
console.log(j); // j is not defined;
//answar --> c

//3which is the following correctly calls this function
var input = prompt("Enter input value");
var controlVal = input / 2 + 3;
var multiplier = function(number, phase) {
  var val = number *  controlVal + phase;
  console.log(val);
};
// answar --> multiplier(2,1)

//4 Does the following code snippet executes with an error? Explain your answer.
function myFunction(x, y, z) {
  return x * y * z;
}
//myFunction(2, 3)
//when we call myFunction(2,3) x will be 2 y will be 3 and z will be undefined
//function returning x*y*z --> 2*3*undefined --> NaN

//5 Which of the following is a local variable in the block of code below?

var input = prompt("Enter input value");
var controlVal = input / 2 + 3;
var multiplier = function(number, phase) {
    var val = number * controlVal + phase;
    console.log(val);
};
//answar--> val

//6What will be the output?

var x = 5;

function first(x) {
  x = 7;
  return x;
}

function second() {
  x = 8;
}

function third() {
  first();
  second();
  
  console.log(x);
}

third();

// when we call third() -> it calls first() is changing x to 7 after second() changing x to 8 and after third console.log(x) which value is 8 now 
//answar --> d 8

//7What will be the output?
function f(x) {
  return x && f(--x);
};

alert(f(2));
// && operator returns first falsy value or last function will call itself until it wil be 0
//and after that it returns 0
//answar --> 0

//8
function whatDoesThisFunctionDo(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
 })
}

//9What does the following code snippet?

function whatDoesThisFunctionDo(arr) {
    return arr.reduce(function(n, m) {
        return n + m;
     }, 0);
} // answar will be 10;

//10What is the output?

var x = 90;
function f(){
  console.log(x);
  var x = 100;
}
f();
//answar undefined

//11 Given a function, which computes the sum of array. Fix the code below to work properly.

function sum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  
  return arr.pop() + sum(arr);
};

console.log(sum([1,2,3,4,5,6]));


