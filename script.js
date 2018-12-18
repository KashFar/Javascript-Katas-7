// Your task will be to reproduce the behavior of these Array methods with your own 
// functions – without using JavaScript's built-in versions:

// 1. forEach()
var forEachArray = ["a", "b", "c"];
var mapArray = [1, 4, 9, 16];

function forEach(Arr) {
    for (i = 0; i < Arr.length; i++) {
        console.log(Arr[i]);
    }
}

Array.prototype.myForEach = function (callBack) {
    for (i = 0; i < this.length; i++) {
        callBack(this[i]);
    }
}

function callBack (y){
    console.log (y)
}

forEachArray.myForEach(callBack)

// // 2. map()
Array.prototype.myMap = function (callBack) {
    let mapArray = []
    for (i = 0; i < this.length; i++) {
        mapArray.push(callBack(this[i]));
    }
    return mapArray;
}

function callBackMap (y){
    return y * 3 
}

console.log(mapArray.myMap((x => x * 3)));
console.log(mapArray.myMap(function (value){return (value * 3)}));
 
// // 3. some()

// 4. find()
// 5. findIndex()
// 6. every()
// 7. filter()

// concat()
// includes()
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability (arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability( fruits, 'banana');   //true

//using arrow function
function checkAvailability2 (arr, val){
    return arr.some(arrVal => val === arrVal);
}

checkAvailability2(fruits, 'kela');   // false
checkAvailability2 (fruits, 'banana');   //true


// slice()
// indexOf()
// join()
// slice()
// flat()
// flatMap()
// Array.of()