/// fibonacci by recursion yield and [...someFunction()];
function* fibonacci(number, first = 0, second = 1) {
  if(number === 0) {
    return first;
  }
  yield first;
  yield *fibonacci(number - 1, second, first + second);
}
function fibonacci1(number) {
  if(number === 1) {
    return 1;
  }else if(isNaN(number)) {
    return 'something went wrong';
  }else if(number < 1) {
    return 'you wrote invalid number';
  }

  function* fib(number, first = 0, second = 1) {
    if(number === 0) {
      return
    }
    
    yield first;
    yield *fib(number - 1, second, first + second);
  }
  return [...fib(number)];

}
console.log(fibonacci1(6,7,8,9)) // [0,1,1,2,3,5]
let array = [...fibonacci(100)];
let a = fibonacci(5);
function* increasing(n) {
  if(n == 15) {
    return n;
  }
  yield n;
  yield *increasing(n+1);
}
let b = [...increasing(3)]
let c = [1,2,3,4];
let d = [...c]
function someFunction(n) {
  return n;
}
// fibo with recursion and array to decrease amount of roundings 
let fibArray2 = [];
function fibonacci2(number) {

}
// palindrome or not palindrome
function isPalindrome(number) {
  number = number.toString();
  for(let i = 0; i < number.length/2; i++) {
    if(number[i] !== number[number.length - 1 - i]) {
      return false;
    }
  }
  return true;
} 
function isPalindrome1(number) {
  if(number.toString().split().reverse().join('') === number.toString()){
    return true;
  }
  return false;
}
//
let arrayPalindrome2 = [];
function isPalindrome2(number) {
  if(number / 10 < 1) {
    arrayPalindrome2.push(number);
    return arrayPalindrome2.join('') === arrayPalindrome2.reverse().join('')
  }
  arrayPalindrome2.push(number % 10);
  return isPalindrome2(Math.floor(number / 10));
}
let arrPalindrome3 = [];
function isPalindrome3(number) {

}
// median and sort 
// pandijital bolor tvery neraruma tivy te voch 
let punDigitalArray = [];
function punDigital(number) {
  if(!number.toString().includes('0')){
    return false;
  }
  if(!number.toString().includes('1')){
    return false;
  }
  if(!number.toString().includes('2')){
    return false;
  }
  if(!number.toString().includes('3')){
    return false;
  }
  if(!number.toString().includes('4')){
    return false;
  }
  if(!number.toString().includes('5')){
    return false;
  }
  if(!number.toString().includes('6')){
    return false;
  }
  if(!number.toString().includes('7')){
    return false;
  }
  if(!number.toString().includes('8')){
    return false;
  }
  if(!number.toString().includes('9')){
    return false;
  }
  return true;
}
//
let arPundi1 = [1,2,3,4,5,6,7,8,9,0];
function punDigital1(number) {
  for(let i = 0; i < arPundi1.length; i++) {
    if(!number.toString().includes(i)) {
      return false;
    }
  }
  return true;
}
// median and sort 
function median(number) {
  let counter1 = 0;
  let counter = 0;
  let digit;
  number = number.toString().split('');
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j < number.length; j++) {
      if(i == number[j]) {
        counter++;
      }
    }
    if(counter1 < counter) {
      counter1 = counter;
      digit = i;
    }
    counter = 0;
  }
  console.log(digit, counter1);
} 
//
function getMedian1(array) {
  let newArray = [];
  let counter = 0;
  let counter1 = 0;
  let median;
  for(let i = 0; i < array.length; i++) {
    if(newArray.includes(array[i])) {
      continue;
    }else {
      newArray.push(array[i]);
    }
    for(let j = 0; j < array.length; j++) {
      if(array[i] == array[j]) {
        counter1++;
        array.splice(j,1);
        j--;
      }
    }
    array.splice(i,0)
    if(counter1 > counter) {
      median = i;
      counter = counter1;
    }
    counter1 = 0;
  } 
}
// 
function getMedian(array) {
  let counter = 0; 
  let counter1 = 0;
  let median; 
  for(let i = 0; i < 101; i++) {
    for(let j = 0; j < array.length; j++) {
      if(i == array[j]) {
        counter1++;
      } 
    }
    if(counter < counter1) {
      counter = counter1;
      median = i;
    }
    counter1 = 0;
  }
  console.log('median is ' + median + ' it had been counted ' + counter + ' times');
}
let sortArray = [];
function sort(number) {
  let number1;
  while(number !== 0) {
    number1 = number % 10;
    number = Math.floor(number / 10);
    if (sortArray.length == 0) {
      sortArray.push(number1);
    }else if(number1 >= sortArray[sortArray.length - 1]) {
      sortArray[sortArray.length] = number1;
    }else {
      for(let i = 0; i < sortArray.length; i++) {
        if(number1 <= sortArray[i]) {
          sortArray.splice(i, 0, number1);
          break;
        }
      }
    }
  }
  console.log(Number(sortArray.join('')));
}
sort(794);
let sort1Array = [];
function sort1(number) {

}
// some exercice from aca 
//return mean of digits
function mean(num) {
  let numberOfDigits = 0;
  let sumOfDigits = 0
}
// 1.Given number n (positive integer). 
//Print the value of n + nn + nnn(not multiplication).

function threNumberFromOneNumber(number) {
  let result = '';
  let multypleBy = 1;
  for(let i = 0; i < 3; i++){ 
    result += number * multypleBy;
    multypleBy++;
  }
  return Number(result);
}

// 2.Given a positive integer. Bring the last digit of the number to the beginning.
// Print the new number.
// If the last digit of the inserted number is 0, number remains the same

function BringLastDigitBegining(number) {
  let lastDigit = number % 10;
  if(lastDigit === 0) {
    return number;
  }
  number = Math.floor(number / 10);
  return Number('' + lastDigit + number);
}

//3.Check if a number is a multiple of 3, 5 or 7 and output the appropriate message
function multipleBy357(number) {
  if(number % 3 == 0 && number % 5 == 0 && number % 7 == 0) {
    return `${number} is a multiple of 3, 5 and 7.`
  }else if(number % 3 == 0 && number % 7 == 0 && number % 5 != 0){
    return `${number} is a multiple of 3 and 7.`
  }else if(number % 3 == 0 && number % 5 == 0 && number % 7 != 0){
    return `${number} is a multiple of 3 and 5.`
  }else if(number % 5 == 0 && number % 7 == 0 && number % 3 != 0){
    return `${number} is a multiple of 5 and 7.`
  }else if(number % 3 == 0){
    return `${number} is a multiple of 3.`
  }else if(number % 5 == 0){
    return `${number} is a multiple of 5.`
  }else if(number % 7 == 0){
    return `${number} is a multiple of 7.`
  }else{
    return `${number} is not a multiple of 3, 5 and 7.`
  }
}

//4. Given three numbers. Sort them by the ascending order.
function sortThreeNum(a,b,c) {
  if(a <= b && b <= c) {
    return `${a}, ${b}, ${c}`;
  }else if(a <= c && c <= b) {
    return `${a}, ${c}, ${b}`;
  }else if(b <= a && a <= c) {
    return `${b}, ${a}, ${c}`;
  }else if(b <= c && c <= a) {
    return `${b}, ${c}, ${a}`;
  }else if(c <= a && a <= b) {
    return `${c}, ${a}, ${b}`;
  }else if(c <= b && b <= a) {
    return `${c}, ${b}, ${a}`;
  }
}
//5.Find the sign of product of three numbers without multiplication operator.
// Display the specified sign.
function signOfNumbers(a,b,c) {
  let counter = 0;
  if(a == 0 || b == 0 || c == 0) {
    return `unsigned`;
  }
  if(a < 0){
    counter++;
  }
  if(b < 0){
    counter++
  }
  if(c < 0){
    counter++;
  }

  if(counter % 2 === 0) {
    return `+`;
  }
  return `-`;
}


//7. Insert a digit and a number. Check whether the digits contains in the number or not.
function dontUseMethodIncludes(a,b) {
  while(b >= 1) {
    if(a == b % 10){
      return `yes`;
    }
    b = Math.floor(b / 10);
  }
  return `No`
}

//8.Enter a number. Reverse its first and last digits. Print the new number
function reverseDigits(number) {
  let result = '';
  while(number >= 1) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return result;
}

//9.Enter a number. Find the difference between its biggest and smallest digits
function theDifference(number) {
  let smallest;
  let biggest;
  while(number >= 1) {
    if(smallest == undefined) {
      smallest = number % 10;
      biggest = number % 10;
    }
    if(number % 10 < smallest) {
      smallest = number % 10;
    }
    if(number % 10 > biggest) {
      biggest = number % 10
    }
    number = Math.floor(number / 10);
  }
  return biggest - smallest;
}
//5 given a number as input, insert dashes (-) between each two even numbers
function minus(number) {
  number = number.toString();
  let a, b;
  let string = '';
  for(let i = 0; i < number.length; i++) {
    if(number[i] % 2 === 0 && number[i+1] % 2 === 0) {
      string += number[i] + '-';
    }else{
      string += number[i];
    }
  }
  return string;
}
function minus1 (number) {
  let string = '';
  let plusOrMInus = 0;
  if(number < 0) {
    plusOrMInus++;
  }
  if(number = 0) {
    return number;
  }
  number = Math.sqrt(number ** 2);
  while(number >= 1) {
    if(string.length != 0 && Number(string) % 10 % 2 === 0 && number % 10 % 2 === 0){
      string = '-' + number % 10 + string;
    }else {  
      string = number % 10 + string;
    }
    number = Math.floor(number / 10);
  }
  if(plusOrMInus === 0) {
    return string;
  }else {
    return '-' + string;
  }
}
console.log(minus1(1568));
//2.1 insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
function isNumberPrime(number) {
  if(number < 2) {
    return 'No';
  }else if(number === 2) {
    return 'Yes';
  }
  for(let i = 2; i <= number; i++){
    if(number % i === 0) {
      return 'No';
    }
  }
  return 'yes';
}
//2.2 Write a program that reads two strings for playing the game of Rock-Paper-Scissors.
// If the strings entered by the user are not 'Paper', 'Rock' or 'Scissors',
// the program keeps on prompting the user to enter new values.
//If valid strings are inserted, repeat the loop, until one of the sides wins.
// (You can use alert instead of console.log)
// let playerOne;
// let playerTwo;
// let somebodyWin = 0;
// while(somebodyWin == 0) {
//   playerOne = prompt('enter a value for player One');
//   playerTwo = prompt('enter a value for player Two');
//   if(playerOne != playerTwo && playerOne == 'Rock' || playerOne == 'Paper' || playerOne == 'Scissors' && playerTwo == 'Rock' || playerTwo == 'Scissors' || playerTwo == 'Paper') {
//     somebodyWin++;
//   }
// }
// if(playerOne == 'Rock' && playerTwo == 'Scissors') {
//   alert(`player One wins ${playerOne} wins ${playerTwo}`)
// }else if(playerOne == 'Scissors' && playerTwo == 'Rock') {
//   alert(`player two wins ${playerTwo} wins ${playerOne}`)
// }else if(playerOne == 'Paper' && playerTwo == 'Rock') {
//   alert(`player one wins ${playerOne} wins ${playerTwo}`)
// }else if(playerOne == 'Rock' && playerTwo == 'Paper') {
//   alert(`player two wins ${playerTwo} wins ${playerOne}`)
// }else if(playerOne == 'Scissors' && playerTwo == 'Paper') {
//   alert(`player one wins ${playerOne} wins ${playerTwo}`)
// }else if(playerOne == 'Paper' && playerTwo == 'Scissors') {
//   alert(`player two wins ${playerTwo} wins ${playerOne}`)
// }
//2.3 Given a number n ( n >= 0 ). Print nth Fibonacci number.
//(Fibonacci series: 0, 1, 1, 2, 3, 5,8 ..., ak = ak-1 + ak-2)
function fibo(number) {
  let number0 = 0;
  let number1 = 1;
  let temper;
  if(number == 0) {
    return 0;
  }
  if(number == 1) {
    return 1
  }
  for(let i = 0; i < number - 1; i++) {
    temper = number1;
    number1 += number0;
    number0 = temper;
  }
  return number1;
}
//2.4
function fibo1(number) {
  if(number == 0) {
    return '0';
  }
  let string = '0';
  let number0 = 0;
  let number1 = 1;
  let temper;
  if(number == 1) {
    return '' + number0;
  }else if(number < 0) {
    return 'No numbers from fibonacci series';
  }
  while(number > number1) {
    string = string + ',' + number1;
    temp = number1;
    number1 += number0;
    number0 = temp;
  }
  return string;
}
//2.5 Write a program which will give you
// all of the potential combinations of a two-digit decimal combination,
// printed in a comma delimited format 
function twoDigitsComb(){
  let result = '\'00\'';
  let zero = ',\'0';
  for(let i = 1; i < 10; i++) {
    result += zero + i + '\''
  }
  for(let i = 10; i < 100; i++){
    result += ',\'' + i + '\'';
  } 
  result += '.';
  return result;
}
//2.6 Insert a number. 
//Calculate product and sum of the digits of the number.
// If product is divisible by the sum, print the quotient, otherwise print the remainder.
function quotientRemainder(number) {
  let sumOfDigits = 0;
  let productOfDigits = 1; 
  if(number == 0) {
    return 'Cannot calculate';
  }
  while(number >= 1) {
    if(productOfDigits == 0) {
      return `Quotient is 0`;
    }
    productOfDigits *= number % 10;
    sumOfDigits += number % 10;
    number = Math.floor(number / 10);
  }
  if(productOfDigits % sumOfDigits === 0) {
    return `Quotient is ${productOfDigits / sumOfDigits}`
  }else{
    return `Remainder is ${productOfDigits % sumOfDigits}`
  }
}
//2.7 edabit.com
function formatNum(num) {
  let minusOrPlus = 0;
  if(num < 0) {
    num *= -1;
    minusOrPlus++;
  } 
	let string = '';
	let counter = 0;
	if(num === 0) {
	  return '0'
	}
	while(num >= 1) {
		if(counter === 3) {
			string = ',' + string;
			counter = 0; 
		}
		string = num % 10 + string;
		num = Math.floor(num / 10);
		counter++;
  }
  if(minusOrPlus != 0) {
    string = '-' + string;
  }
	return string;
}
//2.8 Given a number. Print all prime factors of the number.
function primeFactors(number) {
  let primeOrNot = 0;
  let result = '';
  if(number < 0) {
    number = number * -1; // bacasakan tveri depqum nuyn patasxany petq e stacvi;
  }
  if(number < 2) {
    return 'Number don\'t have prime factors';
  }
  if(number % 2 === 0) {
    result += 2;
  }
  for(let i = 3; i <= number; i++) {
    if(number % i == 0) {
      for(let j = 2; j < i; j++) {
        if(i % j == 0) {
          primeOrNot++;
        }
      }
      if(primeOrNot == 0) {
        if(result.length == 0) { // nra hamar vor dimacic miamit storaket chdni
          result += i;
        }else{
          result += ',' + i;
        }
      }
    }
    primeOrNot = 0;
  }
  return result;
}
//2.9 Enter a positive number.
// Calculate and print its factorial.
// ( n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1 , 0! = 1 )
function numbersFactorial(number) { 
  let copyOfNumber = number;
  let result = 1;
  while(number > 1) {
    result *= number;
    number--;
  }
  return `!${copyOfNumber} = ${result}`;
}
// 2.10 Print the following number pattern: 
function numberPatern(number){ // this function is for any length of patern 
  if(number == 1) {
    return number;
  }
  let string = '';
  let copyNumber = 1;
  while(copyNumber <= number) {
    for(let i = 1; i <= copyNumber; i++) {
      string += i;
    }
    copyNumber++;
    string += '\n ';
  }
  number--;
  while(number >= 1){
    for(let i = 1; i <= number; i++){
      string += i;
    }
    number--;
    string += '\n ';
  }
  return string.slice(0,-2);
}
function numberPatern1(){
  let string = ` 1
  12
  123
  1234
  12345
  1234
  123
  12
  1`;
   return string;
}
function numberPater2() {
  let string = '';
  for(let i = 1; i < 6; i++) {
    for(let j = 1; j < i; j++) {

    }
  }
}
function primeOrNot2(num) {
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}
// exercise with arrays 
function sumArr(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  })
  return sum;
}
function somethingWwith(a,b,step) {
  let array = [a];
  while(array[length - 1] + step <= b) {
    array[length] = array[length -1] + step;
  }
  console.log(array);
}
function maximumElement(array) {
  let max = array[0];
  array.forEach(item => {
    if(max < item){
      max = item;
    }
  })
  console.log(max);
}
function productOfTwoNeighbors(array) {
  let arr = [];
  for(let i = 0; i < array.length; i++) {
    arr.push(array[i] * array[i + 1]);
  }
  console.log(arr);
}
function onlyElementsOnes(array) {
  let arr = [];
  array.forEach(element => {
    if(!arr.includes(element)){
      arr.push(element);
    }
  })
  return arr;
}
function changingString(string, a, b) {
  let arr = string.split('');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == a) {
      arr[i] = b;
    }
  }
  arr = arr.join('')
  return arr;
}
function frquencyof(array) {
  let count = 0;
  let string1 = '';
  let string = '';
  for(let i = 0; i < array.length; i++) {
    if(string1.includes(array[i])){
      continue;
    }
    string += array[i];
    array.forEach(element => {
      if(element == array[i]){
        count++;
      }
    })
    if(string.length != 0) {
      string += `\n${array[i]}: ${count / array.length.toFixed(2)}`
    }else{
      string += `${array[i]}: ${count / array.length.toFixed(2)}`
    }
    count = 0;
  }
  return string;
}
//3.1 Given mixed array of numbers, strings, booleans, nulls and undefineds.
// Filter array and get all the numbers in a separate array.
// Arrange them such as from the beginning are the odds and from the ending the evens
function filterArray(array) {
  let arrOdds = array.filter(element => typeof element == 'number' && element % 2 == 1);
  let arrEvens = array.filter(element => typeof element === 'number' && element % 2 == 0);
  let result = arrOdds.concat(arrEvens);
  return result;
} 

//3.2 Given an array of strings and numbers. Print the number of integers and the number of strings in the array.
function numberOfNumbersStrings(array) {
  let numberOfNumbers = 0;
  let numberOfStrings = 0;
  array.forEach(element => {
    if(typeof element === 'number') {
      numberOfNumbers++;
      return;
    }
    if(typeof element === 'string') {
      numberOfStrings++;
      return;
    }
  })
  return `Numbers: ${numberOfNumbers}, Strings: ${numberOfStrings}`;
}
// //3.3 Given an array of numbers and a number.
//  Find the index of a first element which is equal to that number.
//   If there is not such a number, that find the index of the first element which is the closest to it
function findTheIndex(array, number) {
  let nearest = Math.abs(array[0] - number);
  let nearestIndex = 0;
  array.forEach(element => {
    if(Math.abs(element - number) < nearest) {
      nearest = Math.abs(element - number);
      nearestIndex = array.indexOf(element);
    }
  })
  return nearestIndex;
}
//3.4 Given an array of a size smaller than 100.
// It consists of numbers from 0 to 99 in any order.
// Create a new array where each element from that array is placed under the index of its value.
// Start from the smallest value and end with the biggest one. If there are missing values, put in its places undefined
function placedUnderTheIndex(array) {
  let arr = [];
  array.forEach(element => {
    arr[element] = element;
  })
  for(let i = 0; i < arr.length; i++) {
    if(isNaN(arr[i])){
      arr[i] = undefined;
    }
  }
  return arr
}
//3.5 Given an array consisting from the arrays of numbers (like a two-dimensional array).
//Find sum of each row and print them as an array
function sumOfArraysinArray(array){
  let arr = [];
  array.forEach(element => {
    arr.push(element.reduce((a,b) => a + b,0));
  })
  return arr;
}
//3.6print a following patern 
function printPat(){
  let a = ' *';
  let result = '';
  for(let i = 0; i <= 6; i++) {
    if(i == 0 || i == 6){
      result += a + a + a + a + a + a + '\n ';
    }else{
      result += a + '        '+ a + '\n ';
    }
  }
  return result
}
//3.7 edabit.com
function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
  }
  return arr2; 
}
//3.8 edabit.com
function clone(arr) {
	arr.push(arr.slice());
	return arr;
}
//3.9 edabit.com
function ticTacToe(board) {
	let array = [];
	for(let i = 0; i < board.length; i++) {
		array.push(board.map(a => a[i]).toString());
		array.push(board[i].toString());
	}
	array.push(board[0][0] + ',' + board[1][1] + ',' + board[2][2]);
	array.push(board[2][0] + ',' + board[1][1] + ',' + board[0][2]);
	if(array.includes('X,X,X')){
		return 'X';
	}else if(array.includes('O,O,O')){
		return 'O'
	}else{return 'Draw'};
} 


// 3.10 edabit.com
function hasIdentical(matrix) {
  let arr = [];
  for(let i = 0; i < matrix.length; i++) {
    arr.push((matrix.map(array => array[i]).toString()));
  }
  for(let i = 0; i < matrix.length; i++) {
    if(arr.includes(matrix[i].toString())){
      return true;
    }
  }
  return false;
} 
//Hayki tvac xndir teqel matrixy
let Haykmatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
function teqelHaykiMatrixy1(array) {
  let arr = [];

  for(let i = 0; i < array.length; i++) {
    arr.push([]);
  }

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[0].length; j++) {
      arr[i].unshift(array[j][i]);
    }
  }
  return arr;
}
function teqelHaykiMatrixy(array) {
  let arr = [];
  for(let i = 0; i < array.length; i++) {
    arr.unshift(array.map(a => a[i]));
  }
  console.log(arr);
}
//tasks from javascript info
function camelized(word) {
  word = word.split('-').map((element,index) => index === 0 ? element : element[0].toUpperCase() + element.slice(1)).join('');
  return word;
}
function filterRange(arr, a, b) {
  return arr.filter(element => element >= a && element <= b);
};
function filterRangeInPlace(arr, a, b) {
  arr = arr.filter(element => element >= a && element <= b);
  return arr;
}
function sortInDecreasingOrder(array) {
  return array.sort((a,b) => a - b).reverse();
}
function sortInDecreasingOrder1(array) {
  return array.sort((a,b) => a - b);
}
function VahanRandomArray(array) {
  let arr = [];
  let random;
  while(array.length != 0){
    random = Math.floor(Math.random() * (array.length - 1));
    arr.push(array[random])
    array.splice(random, 1)
  }
  return arr;
}
function VahanRandomArrayWithSort(array) {
  let random;
  return array.sort(() => {
    return 0.5 - Math.random();
  });
}
function isNaNNAN(number) {
  return number != number;
}
function isEmptyObj(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}
function sumOfObject(obj) {
  let sum = 0;
  for(let key in obj) {
    sum += obj[key];
  }
  return sum;
}
function multiplyNumeric(obj){
  for(let key in obj) {
    if(!isNaN(obj[key])){
      obj[key] *= 2; 
    }
  }
  return obj;
}
let deepObj = {
  name: 'John',
  surname: 'Smith',
  obj: {
    name: 'Hayk',
    surname: 'Poghosyan',
    obj: {
      name: 'Andranik',
      surname: 'Tsaturyan',
    }
  }
}
function deepCloningObj(obj,cloning) {
  cloning = {};
  for(let key in obj) {
    
  }
}
// 4.1 Given a sentence with missing words and an array of words.
// Replace all ‘_’ in a sentence with the words from the array.
function replaceInSentence(string, array){
  string = string.split('');
  for(let i = 0; i < string.length; i++) {
    if(string[i] == '_'){
      string[i] = array.splice(0,1)
    }
  }
  return string.join('');
}
//4.1
function replaceInSentence(string, array){
  string= string.split('');
  string.map(element =>{
    if(element === '_'){
      return array.splice(0,1);
    }
  })
  return string.join('')
}
//4.2 Given an array of strings.
// Find the strings with maximum and minimum lengths in array.
// Print the sum of their lengths
function sumOfMaxMinLength(array){
  array = array.map(el => el.length).sort((a,b) => a - b);
  return array[0] + array[array.length - 1];
}
function sumOfMaxMinLength1(array){
  array = array.sort((a,b) => a.length - b.length);
  return array[0] + array[length - 1];  
}
//4.3 Given a sentence as a string.
// Split it according to space and comma and create an array
// consisting of the words of the array.
//The last word should not contain the last . or ! 
function splitWithCommaSpace(string){
  if(string){
    if(string[string.length - 1] && string[string.length - 1].toUpperCase() == string[string.length - 1].toLowerCase()){
      string = string.split('').splice(0, string.length - 1).join('')
    }
  }
  string = string.split(',').join(' ').split(' ');
  string = string.filter(element => {
    if(element) {
      return element;
    }
  });
  return string;
}
//4.4 Given a string and symbols. Change first symbol by the second one in the string
function changeSymbols(string, symbol1, symbol2) {
  return string.split('').map(el => {
    if(el == symbol1) {
      return symbol2
    }else if(el == symbol2){
      return symbol1;
    }else{
      return el
    }
  }).join('');
}
  //4.5 Insert a string.
  //Create new string which is the mirror reverse of the inserted one around its center
  function mirrorReverseOfString(string) {
    string = string.split('');
    let result = [];
    if(string.length % 2 == 0) {
      result.push(string.splice(0,string.length / 2).join(''));
      result.unshift(string.join(''))
    }else{
      result.push(string.splice(0, Math.floor(string.length / 2)).join(''));
      result.unshift(string.splice(0,1).join(''));
      result.unshift(string.join(''));
    }
    return result.join('')
  }
  //4.6 Write a function that accepts a string(a sentence) as a parameter
  // and finds the longest word within the string
  // If there are several words which are the longest ones,
  // print the last .word(words can be separated by space, comma or hyphen).
  function theLongestString(string){
    string = string.split(',').join(' ').split('-').join(' ').split(' ');
    if(string[string.length - 1]){
      if(string[string.length - 1].toUpperCase() == string[string.length - 1].toLowerCase()){
        string[string.length - 1] = string[string.length - 1].split('').splice(0, string[string.length - 1].length - 1).join('');
      } 
    }
    let result;
    for(let i = 0; i < string.length; i++) {
      if(result == undefined) {
        result = string[i];
      }
      if(string[i].length >= result.length) {
        result = string[i];
      }
    }
    if(result == undefined){ // instead of this we can write// return result || string
      return string;
    }else{
      return result;
    }
  }
//4.7 Given a phone number.
// Write a function to clean it up, so it is valid.The rules are as follows
function badorGoodNumber(string) {
  let result = [];
  string = string.split('');
  for(let i = 0; i < string.length; i++) {
    if(typeof +string[i] == 'number' && +string[i] == +string[i]){  
      result.push(string[i]);
    }
  }
  if(result.length == 10) {
    return result.join('');
  }else{
    return 'Bad number'
  }
}
//4.8 Write a function to compute a new string from the given one
// by moving the first char to come after the next two chars,
// so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
// Ignore any group of fewer than 3 chars at the end
function computeNewFromString(string){
  let result = [];
  if(string.length < 3) {
    return string;
  }
  string = string.split('');
  for(let i = 2; i < string.length; i += 3) {
    result.push(string[i-1]);
    result.push(string[i]);
    result.push(string[i-2]);
  }
  if(string.length % 3 == 0) {
    return result.join('');
  }
  result.push(string.splice(-(string.length % 3)).join(''));
  return result.join('');
}
//4.9 edabit.com
function difCiph(input) {
	let result = []
	if(typeof input == 'string') {
		result[0] = input.charCodeAt(0);
		for(let i = 1; i < input.length; i++) {
			result[i] = input.charCodeAt(i) - input.charCodeAt(i - 1);
		}
		return result
	}else{
		result[0] = String.fromCharCode(input[0]);
		for(let i = 1; i < input.length; i++) {
			result[i] = String.fromCharCode(result[i - 1].charCodeAt(0) + input[i])
		}
		return result.join('')
	}
}
//4.10 edabit.com
function binaryClock(time) {
	time = time.split(':').join('').split('')
	let result = Array(2).fill('000000');
	result.unshift(' 00000'); result.unshift(' 0 0 0');
	result = result.map(element => element.split('')).reverse();
	time = time.map(element => Number(element).toString(2).split(''));
	for(let i = 0; i < 6; i++) {
		for(let j = 0; j < time[i].length; j++) {
			if(time[i][time[i].length - 1 - j] == '1'){
				result[j][i] = '1'
			}
		}
	}
	return result.reverse().map(element => element.join(''))
}
//Hayk 4.3
function hayk43(string) {
  var arrByComma  = string.split(',');
  var arrBySpace;
  for (item of arrByComma) {
    arrBySpace.push(item.split(' '));
  }
  var lastWord = arrBySpace[arrBySpace.length - 1];
  if (/^[a-zA-Z]+$/.test(lastWord)){
    arrBySpace[arrBySpace.length - 1] = lastWord.substr(0, lastWord.length - 1);
  }
}
//accumulator for instance and constructor
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function(){
    this.value += +prompt('enter next number');
  }
}
//if you return parent object by this it allows you to hain objects methods
function Chains(firstStep) {
  this.value = firstStep;
  this.up = () => {
    this.value++;
    return this; // with this
  }
  this.down = () => {
    this.value--;
    return this;
  }
  this.getValue = () => {
    return this.value;
  }
}
/* let chain = new Chain(15);
  chain.up().down().up().down() // no errors 
  if we have not use return this in properties it will give cannot read property of undefined  
*/
function MathRandomWithoutRandom(){
  
}
function hundre(array){
  return 5500 - array.reduce((a,b)=> a+b, 0);
}
//5.1 count of vowels in the string.
function countVowels(string){
  let countOfVowels = 0;
  let vowels = new Set(['a','e','i','o','u']);
  string = string.toLowerCase().split('');
  string.forEach(item => {
    if(vowels.has(item)){
      countOfVowels++;
    }
  }) 
  return countOfVowels;
}
//5.2 Given a large number. 
//Find the difference between the most appeared largest and smallest digits
function mostAppearedLargeSmalldif(number) {
  const map = new Map();
  const arrayFromDigits = Array.from(number.toString());
  let smallestDigit = 10;
  arrayFromDigits.forEach(digit => {
    if (smallestDigit > +digit) {
      smallestDigit = +digit;
    }
    map.set(+digit, (map.get(+digit) || 0) + 1);
  });
  let mostApearedDigit;
  let countMostApeared = -1;
  for(const [digit, count] of map){
     if (countMostApeared == count && mostApearedDigit < digit || countMostApeared < count) {
      mostApearedDigit = digit;
      countMostApeared = count;
    }
  }
  return mostApearedDigit - smallestDigit;
}
//5.3Write a function, which receives a string,
// finds possible largest numbers in the string and returns their sum
function sumStringsNumbers(string){
  string = string.split('');
  arrayOfNumbers = [];
  let currentNumber = '';
  string.forEach((item, index) => {
    if(item === '-' && Number(string[index+1]) > -1){
      currentNumber += item;
    }
    if(Number(item) > -1){
      currentNumber += item;
    }
    if(!(Number(string[index+1]) > -1)){
      arrayOfNumbers.push(Number(currentNumber));
      currentNumber = '';
    }
  })
  return arrayOfNumbers.reduce((a,b) => a + b);
}
//5.4 Given a word and a list of possible anagrams, select the correct sublist.
function listOfAnagrams(string, array){
  let result = [];
  let check = string.split('');
  array = array.map(item => item.split(''));
  array.forEach(item => {
    if(item.length != string.length){
      return;
    }
    for(let str of item){
      if(check.includes(str)){
        check.splice(check.indexOf(str),1);
      }
    }
    if(check.length == 0){
      result.push(item.join(''));
    }
    check = string.split('');
  })
  return result;
}
//5.5Write a function to find longest substring in a given a string
//without repeating characters except space character. If there are several,
// return the last one. Consider that all letters are lowercase
function longestSubstring(string){
  string = string.split('');
  let check = [];
  let withoutRepeating = [];
  string.forEach((element, index) => {
    for(let i = index; i < string.length; i++){
      if(!check.includes(string[i]) || string[i] == ' '){
        check.push(string[i]);
      }else{
        withoutRepeating.push(check.join(''));
        check = [];
        return;
      }
    }
  })
  withoutRepeating = withoutRepeating.sort((a,b) => a.length - b.length);
  return withoutRepeating[withoutRepeating.length - 1];
}
//5.5
function longestSubstring1(string){
  let maxSub;
  let maxLength = 0;
  let checkArray = [];
  let check = 0;
  string = string.split('');
  first: for(let index in string) {
    for(let i = index; i < string.length; i++) {
      if(string[i] == string[i].toUpperCase()) {
        checkArray.push(string[i]);
      } else if(!checkArray.includes(string[i])) {
        checkArray.push(string[i]);
        check++;
      } else if(checkArray.includes(string[i])) {
        if(maxLength <= check) {
          maxLength = check;
          maxSub = checkArray.join('');
          check = 0;
          checkArray = [];
          continue first;
          
        }
      }
       if(i == string.length - 1 && maxLength < check) {
        return maxSub;
      } else if(i == string.length - 1) {
        return checkArray.join('')
      }
    }
  } 
}
//
function longestSubstring2(string){
  string = string.split('');
  let check = [];
  let withoutRepeating = [];
  string.forEach((element, index) => {
    for(let i = index; i < string.length; i++){
      if(!check.includes(string[i]) || string[i] == ' '){
        check.push(string[i]);
      }else{
        withoutRepeating.push(check.join(''));
        check = [];
        return;
      }
    }
  })
  withoutRepeating = withoutRepeating.sort((a,b) => a.length - b.length);
  return withoutRepeating[withoutRepeating.length - 1];
}
//5.6 Write a function which receives two strings
//and removes appearances of the second string from the first one
function removeAppearances(string, secondString){
  return string.split(secondString).filter(item => item != '' && item != ' ').join('');
}
//5.7 edabit.com
function concat(...args) {
	let array = [...args];
	array.forEach((item, index) => {
		if(index == 0){
			return;
		}
		array[0] = array[0].concat(item);
	})
	return array[0];
}
//5.8 edabit.com
function capToFront(string) {
	let result = [];
	let arrayLower = []
	string = string.split('');
	string.forEach((item, index) => {
		if(item == item.toUpperCase()){ 
			result.push(item);
		}else{
			arrayLower.push(item)
		}
	})
	return result.concat(arrayLower).join('')
}
//5.9 edabit.com
function multiplyNums(nums) {
	return Number(nums.split(', ').reduce((a,b) => Number(a) * Number(b)));
}
//5.10 edabit.com
function replaceVowel(word) {
	word = word.split('');
	result = '';
	let vowels = new Map([
		['a','1'],
		['e', '2'],
		['i', '3'],
		['o', '4'],
		['u', '5']
	])
	word.forEach(item => {
		if(vowels.has(item)){
			result += vowels.get(item);
		}else{
			result += item;
		}
	})
	return result
}
//edabit.com 
function almostSortedEd(arr) {
	let increasing = 0;
	let decreasing = 0;
	for(let index = 0; index < arr.length - 1; index++) {
		if(arr[index] < arr[index+1]) {
			increasing++
		} else {
			decreasing++
		}
	}
	if(increasing === 1 || decreasing === 1) {
		return true
	} else {
		return false
	}
}
//6.1 1.Write a function that receives the time in 12-hour
// AM/PM format and returns a string representation of the time in military (24-hour) format.
function c24hourstime(string) {
  string = string.split(':');
  let pmAm = string[2][2] == 'P' ? 1: 0;
  string[2] = string[2].split('').splice(0,2).join('');
  string[0] = pmAm == 1 ? (string[0] == 12 ? string[0] : +string[0] + 12) : (string[0] == 12 ? '00' : string[0]); 
  return string.join(':');
}
//6.2 2.Create a function that takes an array of date objects and return the
// "longest streak" (i.e. number of consecutive days in a row).
function ex62(array) {
  if(array.length === 1 || array.length === 0) {
    return 0
  }
  let arrayOfDates = array.map(item => new Date(item.date));
  arrayOfDates.sort((a,b) => new Date(a) - new Date(b));
  let check = 1;
  let result = 1;
  for(let i = 1; i < arrayOfDates.length; i++) {
    if(arrayOfDates[i] - arrayOfDates[i - 1] == 24*3600*1000) {
      check++
    } else {
      check = 1;
    }
    result = check > result ? check : result;
  }
  return result == 1 ? 0 : result;
}

//6.3 Create a function that returns the smallest number of changes it takes to transform one number into one 
//with identical digits. A step is incrementing or decrementing a digit by one

function ex63(number) {
  let counter;
  let check = 0;
  number = number.toString().split('');
  for(let digit of number) {
    for(let counting of number) {
      check += Math.abs(digit - counting);
    }
    if(counter === undefined) {
      counter = check;
    } else {
      counter = counter > check ? check : counter;
    }
    check = 0;
  }
  return counter;
}

//6.4 Given a string of digits, output all the contiguous substrings of length n in that string.
function ex64(string, number) {
  string = string.split('');
  let result = [];
  for(let index in string) {
    if(+index + number >= string.length) {
      return result;
    } else {
      result.push(string.slice(+index, +index + number).join(''));
    }
  }
}
//6.5Given a word, compute the scrabble score for the given word.
// To calculate scrabble score use the following table of scores:
function ex65(string) {
  let result = 0;
  const array = [
    new Set(['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']),
    new Set(['d', 'g']),
    new Set(['b','c','m','p']),
    new Set(['f','h','v','w','y']),
    new Set(['k']),
    new Set(['j','x']),
    new Set(['q','z'])
  ];
  for(let letter of string.split('')){
    for(let index in array) {
      result += array[index].has(letter) ? +index + 1 : 0;
    }  
  }
  return result
}
//6.6 edabit.com **
const SYMBOLS = ["♒", "♓","♈", "♉", "♊", "♋", "♌", "♍","♎", "♏", "♐", "♑",]; // first change places of last two;
function zodiacSymbol(dateString) {
  dateString = new Date(dateString.split(',')[0]);
  const check = [
    new Date('January 21'), new Date('February 20'), //+2
    new Date('March 21'), new Date('April 21'),new Date('May 22 '),
    new Date('June 22'),new Date('July 23'),new Date('August 23'),
    new Date('September 24'),new Date('October 24'),new Date('November 23'),
    new Date('December 22')
  ];
  for(let index in check) {
    if(check[index] > dateString) {
			if(+index - 1 < 0) {
				return SYMBOLS[check.length - 1]
			}
        return SYMBOLS[+index - 1]
    }
  }
}
//6.7edabit 
function ex67(array, n) {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
  for(let index in array) {
    array[index] = week[(week.indexOf(array[index]) + n) % week.length]
  }
  return array
}
//6.8 edabit
  function formatBlogPost(post, users) {
    let map = new Map([
      [0, 'January'],
      [1, 'February'],
      [2, 'March'],
      [3, 'April'],
      [4, 'May'],
      [5, 'June'],
      [6, 'July'],
      [7, 'August'],
      [8, 'September'],
      [9, 'October'],
      [10, 'November'],
      [11, 'December']
    ]);
    let time = new Date(post.timestamp).toString().split(' ').splice(0,4);
    time[0] += ','; time[1] = map.get(new Date(post.timestamp).getMonth());
    time[2] += ',';
    time = time.join(' ') + '\n';
    let title = '# ' + post.title.replace(post.title[0], post.title[0].toUpperCase()) + '\n';
    let writtenBy = 'Written by ' + '[' + users[post.userId - 1].firstName + ' ' + users[post.userId - 1].lastName +'](mailto:' + users[post.userId - 1].email +') on ' + time;
    return title + '\n' + writtenBy + '\n' + '---\n' + '\n' + post.body;
  };
//6.9edabit
function getDays(date1, date2) {
	return Math.abs(new Date(date1) - new Date(date2)) / (24*3600*1000);
}
function vahanTas(array) {
  let biggest;
  let biggestSum;
  let counter = 0;
  for(let index in array) {
    for(let i = index + 1; i <= array.length; i++) {
      counter = array.slice(index, i).reduce((a,b) => a + b,0);
      if(biggestSum === undefined || biggestSum <= counter) {
        biggestSum = counter;
        biggest = array.slice(index, i);
      }
      counter = 0;
    }
  }
  return biggest;
}