/* eslint-disable */

// 1. forEach
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

Array.prototype.myForEach = function (callback){
  for (i of this){
    callback(i)
  }
}

array1.myForEach(function(element){
  console.log(element);
})

// ***********************************************
// 2. Map 
var array2 = [1, 4, 9, 16];

// pass a function to map
const map1 = array2.map(x => x * 2);

console.log(map1);

Array.prototype.myMap = function(callback){
  let newArray = []
  for(let i of this){
  newArray.push(callback(i))
  }
return newArray
}
const map2 = array2.myMap(x => x * 2);
console.log(map2);

// ***********************************************
// 3. some ()
var someArray = [1, 2]
function isEven(number) {
  //  checks whether an element is even
  return number % 2 === 0
}
function isOdd(number) {
  //  checks whether an element is even
  return number % 2 !== 0
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

console.log(someArray.mySome(isEven))

// ***********************************************
// 4. find()

var array3 = [5, 12, 8, 130, 44];

let found = array3.find(function(element) {
  return element > 10;
});

console.log(found);

Array.prototype.myFind = function (callback) {
  for (let i of this) {
    if (callback(i)) {
      return i 
    }
  }
  return false
}
console.log(array3.myFind(isEven))

// ***********************************************
// 5. findIndex()

//using (i in this) lets you extract index with this[i]
Array.prototype.myFindIndex = function (callback) {
  for (let i in this) {
    if (callback(this[i])) {
      return i
    }
  }
  return -1
}
console.log(array3.myFindIndex(isEven))

// ***********************************************
// 6. every()

Array.prototype.myEvery = function (callback) {
  for (let value of this) {
    if (!callback(value)) {
      return false
    }
  }
  return true
}
console.log(array3.myEvery(isEven))

// ***********************************************
// 7. filter()

Array.prototype.myFilter = function (callback) {
  let newArray = []

  for (let value of this) {
    if (callback(value)) {
      newArray.push(value)
    }
  }
  return newArray
}
console.log(array3)
console.log(array3.myFilter(isEven))
console.log(array3.myFilter(isOdd))

// put in any function where return is. 
console.log(array3.myFilter((value) => {
  return value > 12
}))