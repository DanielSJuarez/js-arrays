// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

let number = function(array){
    return array.map(function(line, index){
      return `${index + 1}: ${line}`
    });
  }

// function number(arr){
//     let result = [];
//     for(let i = 1; i <= arr.length; i++){
//         result.push(i + ':' + arr[i - 1]);
//     }
//     return result
// }
// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = function(N){
    const newArr = [];
    if(arr.length = 0){
      return newArr;
    } else {
    for(let i = 0; i < N; i++){
      newArr.push(i);
       }
      return newArr;
     }
  };

//const arr = N => N === undefined ? [] : [...Array(N).keys()];
// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    let lights = [...lamps];
    let flight = drone.length;
    
    if(flight > lamps.length){
      flight = lamps.length;
    }
      
    for (let i = 0; i < flight; i++){
       lights[i] = 'o';
    }
      
    return lights.join('').toString();
  }

// function flyBy(lamps, drone){
//     let lampsOn = '';
//     for(let i = 0; i < document.length; i++){
//         lampsOn += 'o'
//     }
//     const lamapsOff = lamps.slice(lampsOn.length, lamps.length);
//     return lampsOn + lamapsOff
// }
// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let averageGrade = 0;
    let grades = 0;
    
    for(let i = 0; i < marks.length; i++) {
            grades += marks[i];
      } 
    averageGrade = Math.floor(grades / marks.length);
    return averageGrade;
  }

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

//Not 30 bytes
const reverse = function(arr){
    let reverseArr = [];
    for (let i = 0; i < arr.length; i++) {
        reverseArr.unshift(arr[i]);
    }
    return reverseArr;
}

//35 bytes
const reverse=a=>a.map(a.pop,[...a])

//30 bytes
reverse=a=>a.map(a.pop,[...a])