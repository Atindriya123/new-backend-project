
//let numOne = 40;
//let numtwo =  30;

//let sum = numOne + numtwo;

//let result  = `The sum of ${numOne} and ${numtwo} is ${sum}.`; 

//console.log(result)








//function add() {
    //let numberone = 20;
    //let numbertwo = 10;
    //let sum = numberone + numbertwo;
    //console.log(`the add of ${numberone} and ${numbertwo} is ${sum}`);
//}

//add();



//let myName = "sukumar";

//if (myName === "atin") {
   // console.log("hi, Atin")
//} else {
   // console.log("hi, there")
//}




/* let a = 12
let b = 5

let result = a % b;

console.log(result);*/




/*let myName = " Atin";
let messege =" Hello,";

let result = messege + myName;

console.log(result);*/



/*let numone = 40;
let numtwo = 30;

let  sum =  numone + numtwo;

let result = `The sum of ${numone} and ${numtwo} is ${sum}.`;
console.log(result);*/

/*const myName = "Suman";

if (myName === "Atin"){
  console.log("Hi,Atin ");
}else{
   console.log("Hi, There");
}*/

// const myName =  "dddg";

// if (myName === "Atin"){
//    console.log("Hi, Atin");
// }else if(myName === "suman"){
//    console.log("HI,suman");
// }else if(myName === "keto"){
//    console.log("keto")
// } else {
//    console.log("Hi, There");
// }

// const number = 7;
// if(number == 0){
//    console.log("Zero")
// }
 
//   else if (number % 2 === 0){
//    console.log(`${number} is even`);
// } else{
//    console.log(`${number} is odd`);
// }
 /*function sub(){
   let numone = 20;
   let numtwo = 50;

   let sum = numone - numtwo;
   console.log(`sub of ${numone} and ${numtwo} is ${sum}`);
 }
 sub();*/




// let a = 10;
// let b = 5;
 
// let sum = a - b;
// console.log(sum);

// let name = " Atin";
// let messege =  " Hello,";

// let result = messege + name;
// console.log(result);

// let numone = 20;
// let numtwo = 30;

// let sum = numone + numtwo;

// console.log(`The sum of ${numone} and ${numtwo} is ${sum}`);

// let person = {
//    name: "Atin",
//    age: 30,
//    greet: function() {
//       console.log("Hello, " + this.name + "!")
//    }
// };


// person.greet();
// console.log(person.name);
// console.log(person.age);



// let person = {
//    name: "Atin",
//    age: 30,
//    greet: function () {
//       console.log(`name: ${this.name}, age: ${this.age}`)
//    },

// sayHello: function() {
//    console.log("Hello!");
// }
// };

// person.greet();
// person.sayHello();


// let person = {
//    name: "Atin",
//    age: 30,
//    greet: function () {
//       console.log(`name: ${this.name}, age: ${this.age}`);
//    },

//    sayHello: function() {
//       console.log("Hello!");
//    }
// };

// person.greet();
// person.sayHello();


// const number = 366;

// if (number === 0){
//    console.log("Zero")
// }

// else if (number % 2 === 0){
//    console.log(`${number} is even`);

// }else{
//    console.log(`${number} is odd`)
// }



// function calculateTriangleArea(side1, side2, side3) {
//    // Calculate the semi-perimeter
//    var s = (side1 + side2 + side3) / 2;

//    // Calculate the area using Heron's formula
//    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

//    return area;
// }

// // Given triangle sides
// var side1 = 5;
// var side2 = 6;
// var side3 = 7;

// // Calculate and display the area
// var triangleArea = calculateTriangleArea(side1, side2, side3);
// console.log("The area of the triangle with sides", side1, ",", side2, ",", side3, "is:", triangleArea);

function isLeapYear(year) {
   // Leap years are divisible by 4
   // If a year is divisible by 100, it must also be divisible by 400 to be a leap year
   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test the function with a year
var yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
   console.log(yearToCheck + " is a leap year.");
} else {
   console.log(yearToCheck + " is not a leap year.");
}


// //Write a JavaScript program to rotate the string 'your name surname' in the left / right direction.

// function rotateStringLeft(str, positions) {
//    positions = positions % str.length;
  
//       return str.slice(positions) + str.slice(0, positions);
   
// }        

// function rotateStringRight(str, positions) {
//    positions = positions % str.length;
//    return str.slice(-positions) + str.slice(0, -positions);
// }

// // Original string
// let originalString = 'Atindriya Mondal';

// // Number of positions to rotate
// let rotatePositions = 9;

// // Rotate left and display
// let rotatedLeft = rotateStringLeft(originalString, rotatePositions);
// console.log("Left Rotated: ", rotatedLeft);

// // Rotate right and display
// let rotatedRight = rotateStringRight(originalString, rotatePositions);
// console.log("right Rotated: ", rotatedRight);

// let originalString = 'Atindriya Mondal';
// let splitBySpace = originalString.split(" ")
// console.log(splitBySpace)
// console.log("Rotated name is: "+splitBySpace[1]+" "+splitBySpace[0])


// function rotateName(str) {
//    let splitBySpace = str.split(" ");
   
//    // Reverse the array using a loop
//    let reversedArray = [];
//    for (let i = splitBySpace.length - 1; i >= 0; i--) {
//        reversedArray.push(splitBySpace[i]);
//    }

//    // Join the reversed array to form the rotated string
//    let rotatedString = reversedArray.join(" ");
//    {
   
//    return(rotatedString);
// }

// console.log(rotateName('Sujan Kumar Pandit'));

// function rotateName(str) {
//    let splitBySpace = str.split(" ");

//    // Reverse the array using the reverse method
//    let reversedArray = splitBySpace.slice().reverse();

//    // Join the reversed array to form the rotated string
//    let rotatedString = reversedArray.join(" ");

//    return rotatedString;
// }

// console.log(rotateName('Atindriya Mondal'));

// function rotateName(inputString) {
//    // Split the string into an array of words
//    let wordsArray = inputString.split(" ");
 
//    // Reverse the array of words
//    let reversedArray = wordsArray.reverse();
 
//    // Join the reversed array to form the rotated string
//    let rotatedString = reversedArray.join(" ");
 
//    return rotatedString;
//  }
 
//  console.log(rotateName('Sujan Kumar Pandit'));


// function rotateName(inputString) {
//    // Spit the string into an arry of words

//    const wordsArray = inputString.split(" ");

//    //Reverse the array of words
//    const reversedArray = wordsArray.reverse();

//    // Join the reversed array to form the rotated string
//    const rotatedString = reversedArray.join(" ");
//    return rotatedString;
// }
// console.log(rotateName('Atindriya Mondal'));

function rotateName(inputString) {
   // Split the string into an array of words
   const wordsArray = inputString.split(" ");

   // Reverse the array of words
   const reversedArray = wordsArray.reverse();

   // Join the reversed array to form the rotated string
   const rotatedString = reversedArray.join(" ");
   
   return rotatedString;
}

console.log(rotateName('Atindriya Mondal'));

function findLargestNumber(num1, num2, num3) {
   const largest =(num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

      return largest;
}

// Given numbers 
const number1 = 14;
const number2 = 24;
const number3 = 17;

//calling the function and storing the result in a variable

const result = findLargestNumber (number1, number2, number3); 

//Display the result
console.log(`The largest numer among ${number1}, ${number2},and ${number3} is ${result}`);
