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
// let objectForMap = {
//   name: 'John',
//   age: 15
// }
// let arrayForMap = ['someArray'];
// let map = new Map([
//   [undefined, 'firstUndefined'],
//   ['undefined', 'second'],
//   [null, 'first'],
//   ['null', 'second'],
//   [1, 'frist'],
//   ['1', 'second'],
//   ['true', 'first'],
//   [true, 'second'],
//   [{},'first'],
//   [objectForMap, 'second'],
//   [[156], 'firstArray'],
//   [arrayForMap, 'SecondArray']
// ]);
// let obj = Object.fromEntries(map);
// console.log(obj)

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


                                    //WeakMap() and WeakSet()
//
//let john = {name: 16}
/* let map = new Map();
map.set(john, "");
john = null; // overwrite John to null now in Map we have some key of object it will not be removed 
we can get it only with map.keys() or entries() -- and so on but cant get it by Map.get(key) because we dont have key
WeakMap is fundamenttally different in this aspect. it doeasn't prevent garbage collection of key objects.

let weakMap = new WeakMap(); 
let obj = {};
weakMap.set(obj, 'something'); 
obj = null;
weakMap.set('strning', 'somethg') // can't use string as the key only can use refference type;

//
let john = {name: 'John'}
weakMap.set(john);
john = null // after overwriting our variable 
// john is removed from the memory
if we compare WeakMap() with Map() in weakmap it will be removed automatically in map it will stay

      WeakMap() does not support iteration and methods keys() values() entries();
      has only the following methods
//
WeakMap.get(key);
WeakMap.set(key);
WeakMap.has(key);
WeakMap.delete(key); finsih...

                                          WeakSet()

//WeakSet() behave similarly 
we cann only add object primitives not working
an object exist if it reachable from somewhere else 
it supports as weakMap has() add() delete() methods but noooottt size() keys()
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let weakSet = new WeakSet();
for(const obj of messages){
  weakSet.add(obj);
}

let weakMap = new WeakMap();

                                          Destructuring 
//
The two most used data structures in JavaScript are Object and Array
      Array Distructuring
let array = ['name', 'surname'];
//destructuring assignment 
//firstName = array[0];
//lastName = array[1]; // instead of this we can write takiny

let [firstName, lastName] = array;
ex2 let [firstName, lastName] = 'hellow world'.split(' ');

  /It's called destructuring assignment, because it destructuries by copying items into variables.
  but the array itself is not modified.
  it's just a short a way to write.

let [firstname, lastname] = array;
instead of firstName = array[0];
lastName = array[1];

  it is ignoring element by commas (,)
ex let array = ['cmeruk', 'emish', 'tandz'];
let [barev, , arev] = array;
console.log(arev) => 'tandz'

  works with any iterable on the right side 
ex let [a,b,c] = 'abc'; console.log(a) => 'a'
ex let [barev, az, vonces] = new Set(['barev', 'Hajox', 'aziz']);
console.log(barev) --> works with any iterable // barev;

  Assign to anything at the left side 
let user = {};
[user.name, user.surName] = 'ilya kantor'.split(' ');
console.log(user.name) ==> ilya

  Looping with the entries 
  previous we saw Object.entries(obj);
  we can use it with destructuring to loop over keys-and-values of an object;
let user = {
  name: 'John',
  age: 25
}
for(let [key, value] of Object.entries(user)){
  console.log(`${key}: ${value}`) ==> namen: 'John' than age: 25
}

  Swap varibale
  A well-known swapping nvalues of the variables
let [name, age] = ['John', 26] // same ase let name = 'john'; let age = 25;
//then 
[name, age] = [age, name]; now age is 'john' age == 'john'
  we can swap more then two variables this way;:

    The ...rest;
let array = ['name', 'surname', 26, 27, 28];
let [arman, tsaturyan, ...age] = array;
arman --> 'name'; tsaturyan --> 'surname'; age[0] --> 26; age[1] --> 27; age[2]--> 28;

    Default values
  /if there are fewer values in the array then variables in the assignment, there will be no error. Absent(bacaka) values are considered undefined
/ex
let [first, last] = [] ==> first == undefined, last == undefined;
  /if we want a default value to replace Absent values we can set it by# =
//defeult values
ex
let [first = 'something', last = 'something else'] = ['Armen'];
now first is 'Armen' last is 'something else'
  /default values can be more complex(bard) expressions or even function calls.they are evaluated if the value is not provided(hashvi arac)
  here we use two promt functions for two defaults. but it will run only for the missing one;
ex
let [name = prompt('pls enter name'), surname = promt('please enter a name')] = ['Syuzanna'];
now will run promt and ask please enter a name for surname but name now is 'Syuzanna'

    Object destructuring
  /the destructuring assignment also work with objects
  /the basic syntax is 
let {var1, var2} = {var1:…, var2:…}
  we have an existing object in the right side, that we want to split into variables. the levt side contains a pattern for the 
  corresponding(hamapatasxan) properties. in the simple case thats a list of variables names in {}
ex
let user = {
  name: 'Andranik',
  surname: 'Tsaturyan',
  age: 25
}
  let {name, surname, age} = user ==> now we have same properties names variables 
  the order does not metter it will work with same variable name and same propertie name

  if we want to assign a property to a variable with another name, for instance options.width to go into the variable named w
  then we can set it using collon.
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let {width: w, height: h, title} = options;
  now we set variable w and set for its value options.width
  now w is 100 h is 200 and title is options.title same name

  for missing properties we can set default values 
let options = {
  title: 'menu'
}
let {witdh = 100, height = 200, title = 'something else'} = options;
  now witdh is 100, height is 200 titles is 'menu' 
    like arrays default values can be any expression or function call;
let options = {
  title: "Menu"
};
let {width = prompt("width?"), title = prompt("title?")} = options;
  we also can combine(hamatexel) both the colon(verjaket) and equality(havasarutyun);
ex
let options = {
  title: "Menu"
};
let {width: w = 100, height: h = 200, title} = options;
  now if we dont have in options width then w will be 100 as default, same h will be 200 because it's also does not exist in options
  and title will be 'menu'

    if we have complex object with many properties. we can extract(hanel) only what we need.
let user = {
  name: 'andranik',
  surname: 'tsaturyan',
  age: 26
}
  let {name} = user // now we have name variable with user's value of the name propertie

    The rest pattern ...Rest
    what if the object have more properties then we have variables? can we take some and then assign the rest somewhere
    we can use the rest pattern just we use with arrays. it's not supported by some older browsers but works in modern ones.
let options = {
  title: "Menu",
  height: 200,
  width: 100
};
let {title, ...Rest} = options; // abizalovka chi anuny rest lini 
title now is 'menu' 
Rest now is an object with rest properties of options
Rest.height == 200 ; Rest.width == 100;

          This won’t work:
let title, width, height;
// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};
  becaues {title, width, height} == {title: undefined, width: undefine, height: undefined} and it is have its own reference
  if we want to work like that without error we should add parentheses(pakagcer) ;
let title, width, height;
({title, width, height} = {title: 'menu', width: 200, height: 100});
title variable now is 'menu' and so on 

      Nested destructuring
    /if an object or arrays contain other array or object(nested), we can use more complex left-side pattern to extract(hanel) deeper()
    portions.(maser).
ex
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};
let {
  size: {width, height},
  items: [item1, item2],
  length = 'default'
} = options 
  now we declare width, height, length,(by default because options does not have length property), item1, item varieables 
  we dont declare size or item variables we wrote to understand where take them.

                    Smart Function parameters.
                there are time when function have more then one parameters most of wich are optional. That's optionally true for 
                user interfaces.Imagine a function thats create a menu.it may have a width height title and so on.
/function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
} //bad way to write such a function
                in the real life is a problem to remember the order of the parapeters so what to do?
                below is the solution;
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};
function something({title = 'Default', witdh = 200, height = 100, items = []}){
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2 
}
something(options) :D yes starting to love programming
        we can use more complex destructuring with nested objects and colon mappings
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
  height: 15,
  width: 20,
};
function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
              showMenu({}) its okay;
              showMenu() it will give error 
              we can fix it to give default {}
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}
showMenu()

exercises 
let user = { name: "John", years: 30 };
let {name, years, isAdmin = false} = user;

  let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function forSalaries(salaries){
  let max = 0;
  let maxName = null;
  for(const [name, payed] of Object.entries()){
    if(payed > max){
      max = payed;
      maxName = name;
    }
    return maxName;
  }
}





                                                  Date and time

        //let's meet a new in built-in object. <<Date>> It stores the date, time and provides methods for date/time managment(karavarum)
        //It stores the date, time and provides methods for date/time managment.
        //For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.
        //      Creation
        //to create a new Date() object
        let date = new Date() current date 
date = new Date().toString().split(' ') --> ["Wed", "Aug", "19", "2020", "17:00:05", "GMT+0400", "(Armenia", "Standard", "Time)"]
          another if we write new Date(0)
date = new Date(0).toString().split(' ') --> ["Thu", "Jan", "01", "1970", "04:00:00", "GMT+0400", "(Armenia", "Standard", "Time)"]
date = new Date(24*3600*1000).toString().split(' ') -->  ["Wed", "Jan", "02", "1970", "04:00:00", "GMT+0400", "(Armenia", "Standard", "Time)"]       
        it representing by miliseconds thats why it add miliseconds to 1970 jan 01
date = new Date(-24*3600*1000) //minusing day;
                new Date(datestring)
        /if there a single argument and it's string
let date = new Date('2017-08-09)
date.toString().split(' ') --> ["Fri", "Jan", "26", "2018", "04:00:00", "GMT+0400", "(Armenia", "Standard", "Time)"]
        new Date(year, month, date, hours, minutes, seconds, ms)
        only first two arguments are obilagotary
date = new Date(2011, 0, 1,0,0,0,0) --> // 1 Jan 2011, 00:00:00
date = new Date(2020, 0) --> jun 1 2020
            only argument for day is starting from 0 
            miliseconds are starting from 0 to 999
            month 0 to 11
            year is same year.
let date = new Date(2020, 12, 32) 2021 01 01;
            this is example of more than enough argument it will turn over next one
                    Acess date components 
            there are methods to acces year month and so on from the date object 
              getFullYear()//4 digit, getMonth() 0 to 11, getDate() 1 to 31, getHours() 0 to 23,getMinutes() 0 to 59, getSeconds(), getMiliseconds() 0 to 999
                    All the methods above return the components relative to the local time zone.
            there are also their UTC-counterparts
let date = new Date() Thu Aug 20 2020 12:40:58 GMT+0400 (Armenia Standard Time)
          we have also getUTCFullYear(), getUTC
let utcHours = date.getUTCHours() --> 8
let hours = date.getHours() 
let something = date.getTime() // wtf 1597912858566
                    Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0
new Date().getTimezoneOffset() // wtf -240
             returns the difference between UTC and local time zone in minutes 
             // if you are in timezone UTC-1, outputs 60
             // if you are in timezone UTC+3, outputs -180
                          Setting date components
            the following methods allows us to set date\time components
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)
            Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().
let today = new Date();
today.setHours(0);
alert(today); // still today, but the hour is changed to 0
today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.     
                              Autocorrection                   
            The autocorrection is a very handy feature of Date objects. We can set out-of-range values, and it will auto-adjust itself.
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!
/
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
alert( date ); // 1 Mar 2016    
//
let date = new Date();
date.setSeconds(date.getSeconds() + 70);
alert( date ); // shows the correct date  
//
let date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(1); // set day 1 of month
alert( date );
date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015      
                              Date to number, date diff
            When a Date object is converted to number, it becomes the timestamp same as date.getTime():
let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()
//
let start = new Date(); // start measuring time
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // end measuring time
alert( `The loop took ${end - start} ms` );

                                    Date.now()
            If we only want to measure time, we don’t need the Date object.
            There’s a special method Date.now() that returns the current timestamp.
            It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object.
            So it’s faster and doesn’t put pressure on garbage collection.
            It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.
            So this is probably better:
let start = Date.now(); // milliseconds count from 1 Jan 1970
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // done
alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates
                                    Benchmarking
            If we want a reliable benchmark of CPU-hungry function, we should be careful.
            Such performance measurements are often called “benchmarks”.
            For instance, let’s measure two functions that calculate the difference between two dates: which one is faster?
// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}
// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}



                                    ...Rest and Spread 
/function someFunction(a,b) {    example of rest 
  return a+b
}
someFunction(1,2,3,4) // no it is not error but we will lose our 3 and 4 
instead we will write 

/function someFunction(...rest) {
  let sum                               // rest is array wich will be our sets arguments
  for(let value of rest) sum += value   // it is not have to be named ...rest we can give another name as ...dksfj
}
                  in this examples ...rest is rest not Spread but both syntax are same ...name
                  and also in this example our rest is array but it can be object as well
                  rest have to be last argument in function or it will cause an error 
function some(a, ...args, b) // it is already not rigth syntax 


        the argument variable
There is also a special array-like object named arguments that contains all arguments by their index.it is also iterable
it is not array and doeas not support array methods like arguments.map() or arguments.filter() 
//**Arrow function do not have arguments
88As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either
for(arg of arguments){}
function forArguments(a,b,c) {
  console.log(arguments.length); // forArguments(1,2,3,5) // result -> 4
  console.log(arguments[0]);    // 1 :D
}


                                  Spread Syntax
/
Math.max(1,2,3,4,5) => 5
but if we have some array and we don't want to use sort function 
let arr = [1,2,3,4,5] how to solve this ? => Math.max(...arr) //we are putting all elements in the braces 
            and also max of two or more arrays 
let arr1 = [1,2,3,4,5], arr2 = [1,2,3,4,5,6], arr3 = [7,8,9];
            Math.max(...arr1, ...arr2, arr3) same as // Math.max(1,2,3,4,5,1,2,3,4,5,6,7,8,9) :)
            
      also we can merge arrays without concat array method 
arr1 = [...arr1, arr2] :D // [1,2,3,4,5,1,2,3,4,5,6]
      notice that spread is not working only with arrays it is working with any iterable for inctance 
let string = 'someString' let arr = [...string] // -> same as [...string.split('')] +:
alternative way to solve this is Array.from(iterable) which return array :D 

      Get a new copy of an array/object
/we remember usin Object.assign()   let object = {arman: 16, ando:17}
let obj = Object.assign({}//where to, object // which porperties)
same thing with the spread syntax 
let arr = [1,2,3]
let arrCopy = [...arr]


