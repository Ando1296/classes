function simvol() {
  //                              SYMBOLS 

  //by specification objects property keys can by either STRINGS OR SYMBOLS type

  //The benefits(ogutner) that symbols can give us 
  //SYMBOLS represent a uniquie identifier (yurahatuk nuynacucich)
  // it is creating by Symbol()
  let id = Symbol()// id is a new symbol 
  //upon creating(stexceluc) we can give symbol description in prenthesis by string
  //it doesn't effect to enything
  let id1 = Symbol('id');
  let id2 = Symbol('id');
  //id1 == id2 //false
  //Symbol don't convert auto to a string
  //alert(id1);     //Uncaught TypeError: Cannot convert a Symbol value to a string
  //at simvol (javascriptInfo.js:16)
  //strings and SYmbols are fundamentally different and should not convert one into 
  //another

  // if we want to show a symbol we need explicitly call toString() on it 
  let id3 = Symbol('id');
  //alert(id3.toString()); // now it works 
  //we can also get symbol.description property to get only description 
  //alert(id3.description); // alert only id(description)


                            //Hidden properties 

  //symbols allows us to create hidden properties of an objcet, that no other part of code 
  // can accidently access or overwrite 
  let id4 = Symbol('id');
  let user = {
    name: 'John',
    [id4]: 15,
  }
  alert(user[id4]) // 15
  let user1 = {
    name: 'Jane'
  }
  user1.id = 'our id value';
  user1.id = 'their id value' // our id was overwritten 

                            //symbols in an object literal 

  // if we want to use symbol as an object literal we need []
  let id5 = Symbol('description');
  let obj = {
    name: 'John',
    [id5]: 'Jackson'
  }
  //That’s because we need the value from the variable id as the key, not the string “id”.

                              //Symbols are skipped by for…in

  //Symbolic properties do not participate in for..in loop
let id6 = Symbol("id");
let user2 = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ) // it works 
//Object.keys also ignores symboles 

//Object.assign({}, user2) it copies the symbols 

                              //Global symbols

  //sometimes we want that same-named symbols be the same for that we are using
  //Symbol.for('description')
  //symbol.for is checking are there a symbol by that description and after if it is not 
  //exist it is creating it aynd saving in global
  let simvol = Symbol.for('global');
  //let simvol1 = Symbol.for('global');
  // simvol == simvol1 // true
  //symbols inside the registory are called global symbols

                                //Symbol.keyFor

  let sym = Symbol.for('id');
  let sum = Symbol.for('cace');
  //get name by symbol
  //alert(Symbol.keyFor(sym)) // id
  //alert(Symbol.keyFor(sum))// cace
  //Symbol.keyFor doesn't work on non global symbols like Symbol('hellow')
  //in description Symbol(description) allways is a string if it is not string it converts to string
  // Symbol.for() == Symbol.for(undefined) == Symbol.for('undefined')
  //Symbol.for(15) == Symbol.for('15')
  //Symbol.for() --> Symbol(undefined)
  //Symbol.for('')--> Symbol()
  
  
  //with non global Symbols we can use property description to take the key
  let id7 = Symbol('andranik');
  console.log(id7.description) // Andranik
  
                              // System symbols

  // here exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.

  //They are listed in the specification in the Well-known symbols table:
                              
  //Symbol.hasInstance
  //Symbol.isConcatSpreadable
  //Symbol.iterator
  //Symbol.toPrimitive
  //…and so on.
  //Symbol is a primitive type for unique identifiers.

//Smbols are created with Symbol() call with an optional description (name).

//Symbols are always different values, even if they have the same name.
//If we want same-named symbols to be equal, then we should use the global registry:
//Symbol.for(key) returns (creates if needed) a global symbol with key as the name.
//Multiple calls of Symbol.for with the same key return exactly the same symbol.
}
function objectToPrimitiveConversion(){
  //1)all objects are true in a boolean context there are only numeric(tvayin) conversion
  //2)The numeric conversion happens when we subtract objects or apply mathematical functions.
  // For instance, Date objects (to be covered in the chapter Date and time) 
  //can be subtracted, 
  //and the result of date1 - date2 is the time difference between two dates
  //3)As for the string conversion – 
  //it usually happens when we output an object like alert(obj) and in similar(nman) contexts

                          //toPrimitive

  //There are three variants of type conversion, so-called “hints”,(hushum) described in the specification:
  
  //object-to-string conversion
  //alert(obj);
  //anotherObj[obj] = 255 // using object as a property key
  
  //object to number conversion
  // in object we should add a function by argument hint that is determine if we want number or string
  let object = {
    name: 'John',
    money: 1000,
    [Symbol.toPrimitive](hint){
      alert(`hint: ${hint}`);
      return hint == 'number' ? this.money : `name: ${this.name}`
    }
  }
  let object1 = {
    //what is hint?  obj + obj // hint is default it menas that we can want to convert 
    //objects into numbers and can want to convert into strings because
    // '2' + '2' == '22'; 2+ 2 == 4; '2' + 2 == '22' //def ault hint
    // if we want obj - obj; obj * obj it means that we only can wnat to convert our obj
    //into numbers
    //alert(obj) // here will give us only string;
    
    //when we aare alerting ---> alert(obj) objects it means that we wnat to convert it into string
    //and result will be '[object, object];
    //when we are doing - opeartion like --> 5 - obj obj.toString() method called 
    //if it doesn't return primitive type its ignored and after calling method obj.valueOf()
    //in plus operation (default hint) first will call obj.valueOf() if it returns same object
    //its ignored and doing toString();
    //if hint is number or default first will call method valueOf()
    //if hint is string first will call toString()
    
    name: 'Andranik',
    money: 9760,
    toString(){
      return this.name;
    },
    valueOf(){
      return this.money;
    }
  }
}
// function StackItem(value, index, nextItem){
//   this.index = index; 
//   this.value = value;
//   this.nextItem = nextItem
// }
// function Stack() {
//   this.size = 0;
//   this.lastItem = null;
//   this.push = (value) => {
//     this.lastItem = StackItem(value, this.size, this.lastItem);
//     this.size++;
//   };
//   this.pop = () => {
//     const targetItem = this.lastItem;
//     this.lastItem = targetItem && targetItem.nextItem;
//     this.size = this.size && this.size - 1;
//     return targetItem && targetItem.value;
//   }
// }
// let Ando = new Stack();
// Ando.push('barev'); 
// Ando.push('arev');
// console.log(Ando);
// function Example(number) {
//   if(this.counter){
//     this.counter += number;
//   }else{
//     this.counter = number;
//   }
//   return this;
//  
let counter = 0; 
function getSum(number){
  if(number != undefined) {
    counter += number;
  }
  if(number === undefined){
    return counter;
  }else {
    return function getSum1(nextNumber){
      if(nextNumber === undefined){
        return counter;
      }else{
        counter += nextNumber;
        return getSum(number = undefined);
      }
    }
  }
}

                                     //itarables 

//itarable That’s a concept that allows us to make any object useable in a for..of loop;
/*let array = [1,2,3,4,5,6];
for(let element of array){
  console.log(element) // 1,2,3,4,5,6 of course separately
}
we find ou that arrays are itarable but besides arrays string also itarable
If an object isn’t technically an array, but represents a collection (list, set) of something,
 then for..of is a great syntax to loop over it, so let’s see how to make it work.
                                  Symbol.iterator

For instance, we have an object that is not an array, but looks suitable for for..of.*/
// let range = {
//   from: 1,
//   to: 5
// } //we want to iterate from 1 to 5 // 1,2,3,4,5
//we need to add a method to the object named Symbol.iterator
//1.When for..of starts, it calls that method once (or errors if not found).
// The method must return an iterator – an object with the method next.
//2.Onward(dalee,hajordiv), for..of works only with that returned object.
//3.When for..of wants the next value, it calls next() on that object.
//4.The result of next() must have the form {done: Boolean, value: any}, 
//where done=true means that the iteration is finished, otherwise value is the next value.
let range = {
  from: 1,
  to: 5,
}
// 1. call to for..of initially calls this
range[Symbol.iterator] = function(){
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values
  return {
    current: this.from,
    last: this.to,
     // 3. next() is called on each iteration by the for..of loop
    next(){
      // 4. it should return the value as an object {done:.., value :...}
      if(this.current <= this.last){
        return {done: false, value: this.current++}//this.current is element it returns this.current and after change it 
      }else{
        return {done: true}
      }
    }
  }
}
//now for of works on range
//for(let element of range){
//   console.log(element); // 1,2,3,4,5
// } 
//Please note the core(himnakan) feature(arandznahatkutyun) of iterables: 
//separation(anjatum) of concerns.(xndirner)
//The range itself does not have the next() method.
//Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](),
// and its next() generates values for the iteration.
//Technically, we may merge them and use range itself as the iterator to make the code simpler.

//Like this:
let range2 = {
  from: 1,
  to: 5,
  [Symbol.iterator](){
    this.current = this.from;
    return this
  },
  // her next() function is not inside of [symbol.iterator]
  next(){
    if(this.current <= this.to){
      return {done: false, value: this.current++}
    }else{
      return {done: true}
    }
  }
}
//when we will call for.. of loop on range two there will be add a current property
                            //Strings iterable

  for (let char of "test") {
  //triggers 4 times: once for each character
  alert( char ); // t, then e, then s, then t
}

                                //Calling an iterator explicitly(KANXAMTACVAC)
let str = "Hello";
// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

                                //ITERABLES AND ARRAY-LIKES 

//
//Iterables are objects that implement the Symbol.iterator method, as described above.
//Array-likes are objects that have indexes and length, so they look like arrays.
//iterable may be not array-like. And vice versa an array-like may be not iterable.

//And here’s the object that is array-like, but not iterable:
// let arrayLike = { // has indexes and length => array-like
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// // Error (no Symbol.iterator)
// for (let item of arrayLike) {}
                              //Array.from

//
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
//let arr = Array.from(arrayLike); 
//now arr.pop() and all array methods will work on arr
//Array.from at the line (*) takes the object,
// examines it for being an iterable or array-like,
// then makes a new array and copies all items to it.

//The same happens for an iterable:
// assuming that range is taken from the example above
// let arr = Array.from(range);
// alert(arr); // 1,2,3,4,5

//The full syntax for Array.from also allows us to provide an optional “mapping” function:

//Array.from(obj[, mapFn, thisArg])

//We can even build surrogate-aware(poxarinich) slice on it:

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// the native method does not support surrogate pairs
alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)

///////////////////////////////Map

//
// Map is a collection of keyed data items, just like an Object.
//  But the main difference is that Map allows keys of any type.
// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

// let map = new Map();
// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key
// console.log(map) object that have '1', 1, true keys and their value

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
// map[key] isn’t the right way to use a Map

//Map can also use objects as keys.

// let john = { name: "John" };

// let visitsCountObj = {}; // try to use an object

// visitsCountObj[john] = 123; // try to use john object as the key

// // That's what got written!
// alert( visitsCountObj["[object Object]"] ); // 123 it convert into string value of John

//!How Map compares keys??
// To test keys for equivalence, Map uses the algorithm SameValueZero. 
//It is roughly the same as strict equality ===, but the difference is that NaN 
//is considered equal to NaN. So NaN can be used as the key as well.??

// This algorithm can’t be changed or customized.

    //Chaining
// Every map.set call returns the map itself, so we can “chain” the calls
// map.set('1', 'str1')
//   .set(1, 'num1')
//   .set(true, 'bool1');

                              //Iteration over Map
//
// For looping over a map, there are 3 methods:
// 1.qmap.keys() – returns an iterable for keys,
// 2.map.values() – returns an iterable for values,
// 3.map.entries() – returns an iterable for entres [key, value], it’s used by default in for..of.                              

// let recipeMap = new Map([
//   ['cucumber', 500],
//   ['tomatoes', 350],
//   ['onion',    50]
// ]);

// // iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//   alert(vegetable); // cucumber, tomatoes, onion
// }

// iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//   alert(amount); // 500, 350, 50
// }

// iterate over [key, value] entries
// for (let entry of recipeMap) { // the same as of recipeMap.entries()
//   alert(entry); // cucumber,500 (and so on)
// }

//The insertion order is used(hertagrvacutyun i tarberutyun objecti)
//The iteration goes in the same order as the values were inserted.
// Map preserves this order, unlike a regular Object.
//Besides that, Map has a built-in forEach method, similar to Array:
// runs the function for each (key, value) pair

// recipeMap.forEach( (value, key, map) => {
//   alert(`${key}: ${value}`); // cucumber: 500 etc
// });

      //Object.entries: Map from Object

//// array of [key, value] pairs
// let map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);

//If we have a plain object, and we’d like to create a Map from it, then we can use built-in method
// Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));

// alert( map.get('name') ); // John


      //Object.fromEntries: Object from Map
//

//let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);
// // now prices = { banana: 1, orange: 2, meat: 4 }
// alert(prices.orange); // 2

//That’s the same, because Object.fromEntries expects an iterable object as the argument.
 //Not necessarily an array. And the standard iteration for map returns same key/value pairs
 // as map.entries(). So we get a plain object with same key/values as the map
//note that if as key we have some objects and try  few of them it will copy only first's value
//string and numbers also work '1' and 1 key it will take first undefined 'undefined' null true ans so on 
let objectForMap = {
  name: 'John',
  age: 15
}
let arrayForMap = ['someArray'];
let map = new Map([
  [undefined, 'firstUndefined'],
  ['undefined', 'second'],
  [null, 'first'],
  ['null', 'second'],
  [1, 'frist'],
  ['1', 'second'],
  ['true', 'first'],
  [true, 'second'],
  [{},'first'],
  [objectForMap, 'second'],
  [[156], 'firstArray'],
  [arrayForMap, 'SecondArray']
]);
let obj = Object.fromEntries(map);
console.log(obj)

// {1: "second", 156: "firstArray", undefined: "second", null: "second", true: "second", [object Object]: "second", someArray: "SecondArray"}
// 1: "second"
// 156: "firstArray"
// [object Object]: "second"
// null: "second"
// someArray: "SecondArray"
// true: "second"
// undefined: "second"
// __proto__: Object 

//we see with arrays it convert to string and past into keys like 156 and someArray
// and always if keys are same in toString() it will take second 
 

/////////////////////////////////SET

// A Set is a special type collection – “set of values” (without keys),
// where each value may occur only once.

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

//  set also have chaining as map
//  for example let set = new Set([16,17,19,20]);
//  set.add('barev').add('hajox'); if in set exist 'barev' or 'hajox' it will not do anything and will return set itself
// we can also can give to set {name: 'john'}
// let name = {name: 'John'}
// let barev = {name: 'lilit'};
// let lilit = {name: 'lilit'} assume that object not the same because they have different references
// let set = new Set();
// set.add(name).add(barev).add(barev).add(lilit);

// Set(3) {{…}, {…}, {…}}
// [[Entries]]
// 0:
// value: {name: "John"}
// 1:
// value: {name: "lilit"}
// 2:
// value: {name: "lilit"}
// size: (...)
// __proto__: Set

// sets are iterable we can use for.. of and also ForEach
// for(let key of set){
//   console.log(set.name);
// }
// on set we can work Array.from 
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// values = Array.from(new Set(values))
//  when we alert set it return object set and when we will alert new map it will gave object map

