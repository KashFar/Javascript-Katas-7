/* eslint-disable */

// Your task will be to reproduce the behavior of these Array methods with your own 
// functions – without using JavaScript's built-in versions:


function add(number1, number2) {
  return number1 + number2
}

// use this add function as my callback to check it all the other ones
// are working properly

// 1. forEach()
var forEachArray = ['a', 'b', 'c', 'd']
// function forEach (Arr) {
//   for (let i = 0; i < Arr.length; i++) {
//     console.log(Arr[i])
//   }
// }

Array.prototype.myForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
}

function callBack(y) {
  console.log(y)
}
forEachArray.myForEach()

// // 2. map()
var mapArray = [1, 4, 9, 16]

Array.prototype.myMap = function (callBack) {
  let mapArray = []
  for (let i = 0; i < this.length; i++) {
    mapArray.push(callBack(this[i]));
  }
  return mapArray
}

function callBackMap(y) {
  return y * 3
}

console.log(mapArray.myMap((x => x * 3)));
console.log(mapArray.myMap(function (value) { return (value * 3) }));

// // 3. some()
// try to use normal function without array.prototype

// function isEven(number) {
//   checks whether an element is even
//   if (number % 2 === 0) {
//     return 'Even'
//   } else {
//     return 'Not Even'
//   }
// }
var mapArray = [1, 3]
function isEven(number) {
  //  checks whether an element is even
  return number % 2 === 0
}

Array.prototype.mySome = function (callback) {

  let output = false
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output = true
    }
  }
  return output
}

console.log(mapArray.mySome(isEven))
// calling mysome and the callback function is running on each item in that array
// expected output: true

// 4. find()

// 5. findIndex()
// 6. every()
// 7. filter()

// concat()
// includes()
var fruits = ['apple', 'banana', 'mango', 'guava']

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal
  })
}

checkAvailability(fruits, 'kela') // false
checkAvailability(fruits, 'banana') // true

// using arrow function
function checkAvailability2(arr, val) {
  return arr.some(arrVal => val === arrVal)
}

checkAvailability2(fruits, 'kela');   // false
checkAvailability2(fruits, 'banana');   //true


// slice()
// indexOf()
// join()
// slice()
// flat()
// flatMap()
// Array.of()