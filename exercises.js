// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function arrStr(str, num){
    let newArr = []
    for (let i = 0; i < num; i++){
        newArr.push(str);
    }    
    return newArr
}

// const anotherWay = function(str, i){
//     return Array.from({
//         length: i
//     }, function(){
//         return str
//     })
// }
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArr(arr){
    let newRevArr = arr.slice().reverse();
    return newRevArr;
}
//splice mutates, slice does not.
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function falsy(arr){
    let falsyArr = arr
    for(let i = 0; i < falsyArr.length; i++){
        if(falsyArr[i] == 0 ||falsyArr[i] == -0 ||falsyArr[i] == !!undefined ||falsyArr[i] == null ||falsyArr[i] == NaN ||falsyArr[i] == false ||falsyArr[i] == ''){
            falsyArr.splice([i], 1);
        }   
    }   
    return falsyArr;
}

// function removeFalsy(arr){
//     const newArr = {};
//     for(let i of arr){
//        if(i){
//         newArr.push(i);
//     }
//     return newArr;
//    }
// }

// let removeFalsy = function (arr){
//     trueArray = arr.filter(Boolean); //boolean built in function that returns true or false
//     return trueArray;
// }

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function arrToObj(nestArr){
    const obj = {};
    for (let i = 0; i < nestArr.length; i++){
        obj[nestArr[i][0]] = nestArr[i][1];
    }
    return obj;
}

// create a functions = object.fromEntries(arr);
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function dupl(arr){
    const uniArr = [...new Set(arr)];
    return uniArr;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function exactArr(arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i]) && arr1.length == arr2.length){
        return true
    } else {
        return false;
        }
    }
}

// function comparArraays(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     arr1.sort();
//     arr2.sort();

//     for(let i = 0; i < arr.length; i++){
//         if(arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true;
// }
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

function flatArrInput(arr) {
    const nestArr = [...arr];
    const newArr = [];
    while (nestArr.length) {
      const nextArr = nestArr.pop();
      if (Array.isArray(nextArr)) {
        nestArr.push(...nextArr);
      } else {
        newArr.push(nextArr);
      }
    }
  return newArr.reverse();
  }

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

function splitArr(arr, num) {
    const splitArr = Math.ceil(arr.length / num);
    return new Array(num)
    .fill('')
    .map((_, i) => arr.slice(i * splitArr, (i + 1) * splitArr));
}

// -----------------------------------------------
