/*const myName = "Suman";

if (myName === "Atin"){
  console.log("Hi,Atin ");
}else{
   console.log("Hi, There");
}*/

// const myName =  "keto";

// if (myName === "Atin"){
// /
// / /   console.log("Hi, Atin");
// // }else if(myName === "suman"){
// //    console.log("HI,suman");
// // }else if(myName === "keto"){
// //    console.log("keto ")
// // } else {
// //    console.log("Hi, There");
// // }

// const myName =  "suman";

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
//}
// const myName = "Atin"
// if (myName === "keto"){
//     console.log("Hi,keto");

// } else if (myName === "Ranjan"){
//     console.log("Hi,chutia");
// } else {
//     console.log("hi, there");
// // }

// const number = 10;
// if(number == 0){
//     console.log("Zero")
// }

// else if (number % 2 === 0){
//     console.log(`${number} is even`);

// }else{
//     console.log(`${number} is odd`)
// }



// const person ={
//     name : "Atin",
//     age :  33,
//     greet : function() {
//         console.log(`name : ${this.name}, age: ${this.age}`)
//     },

//   sayHello : function(){
//     console.log("Hello!");
//   },

// };

// person.greet();
// person.sayHello();


// const person ={
//     name : "Atin",
//     age : 33,

//     greet : function () {
//         console.log(`name : ${this.name}, age : ${this.age}`)
//     },

//     sayHellow : function(){
//         console.log("Hellow!");
//     },

  

// };

// person.greet();
// person.sayHellow();

// ---------------------LOOP-----------------//

// console.log("HELLO WORLD");

// for(let i = 0; i < 3; i = i + 1){
//     console.log("Hello World");
// }

// for (let i = 0; i< 5; i = i + 1){
//     console.log("Atindriya Mondal")
// }

// for (let i = 1; i<=10; i= i + 1){
//     console.log(i)
// }

// for (let i = 1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// let i = 0;

// while (i  < 3){
//   i = i + 1;
//     console.log("Hello World");
  
// }

// let i = 1;

// while (i < 21) {
//     i = i + 2;
//     console.log(i);
   
// }

// function add(numOne, numTwo){
   
// const sum = numOne + numTwo; // parameter and argument//
// console.log(sum);

// }
// add(10,5);
// add(20,30);
// add(15,47);

// function sub(numOne, numTwo){
//     const sub = numOne - numTwo;

//     console.log(sub);
// }
// ----------------Arrow function------\\
// sub(20, 10);
// sub(190,75);
// //------------Arrow function----//
// const add = (numOne,numtwo) =>{
//     const sum = numOne + numtwo;
//     console.log(sum); 
// }

// add(10, 12);


// 1. Write a function which takes length and breadth of a rectangle as arguments from user and
// console log area of it.

// function calculateRectangleArea(length , breadth) {
//   const area = length * breadth;

//   console.log(`The area is rctangle is: ${area}`);
// }

// const userlength = 10;
// const userbreadth = 5;

// calculateRectangleArea(userlength, userbreadth);



// -------------2. Write a function which takes side of a squire as an argument from user and console log area
// and perimeter of it.

// function calculateSquareArea(userSide){
//   const area = side * side ;

//   return(area);
// }


// function calculateSquarePerimeter(userSide){
//   const perimeter = side * side ;

//   return (perimeter);
// }

// const userSide = 10; 
// const areaResult = calculateSquareArea(userside);
// const perimeterResult = calculateSquarePerimeter(userside);

// console.log(`The area of square ${areaResult}`);
// console.log(`The perimeter of square ${perimeterResult}`);


// // Example usage:
// // Replace the value of 'userSide' with the actual side length provided by the user.

// const userSide = 5;  // Replace with actual user input

// const areaResult = calculateSquareArea(userSide);
// const perimeterResult = calculateSquarePerimeter(userSide);

// console.log(`The area of the square is: ${areaResult}`);
// console.log(`The perimeter of the square is: ${perimeterResult}`);




// function calculateSquareArea(side) {
//   const area = side * side;
//   return area;
// }

// function calculateSquarePerimeter(side) {
//   const perimeter = 4 * side;
//   return perimeter;
// }

// // Example usage:
// // Replace the value of 'userSide' with the actual side length provided by the user.

// const userSide = 5;  // Replace with actual user input

// const areaResult = calculateSquareArea(userSide);
// const perimeterResult = calculateSquarePerimeter(userSide);

// console.log(`The area of the square is: ${areaResult}`);
// console.log(`The perimeter of the square is: ${perimeterResult}`);

// !!--------------------------!!
// function calculateSquareArea(side) {
//   const area = side * side ;

//   return area;
// }

// function calculateSquarePerimeter(side){

//   const perimeter = 4 * side ;

//   return perimeter;
// }

// const userSide = 10;

// const areaResult = calculateSquareArea(userSide);
// const perimeterResult = calculateSquarePerimeter(userSide);

// console.log(`The area of square is: ${areaResult}`);
// console.log(`The perimeter of square is: ${perimeterResult}`);


// 3. Write a function which takes name, roll number and area of interest of the user as
// arguments and console log in this format.
//  Hey my name is Raju, my roll number is 43 and I love coding.

// let person  ={
//   name: "Hey my name is Raju, ",
//   roll: " my roll is 43", 
//   interest: " I love coding",

//    displayInfo: function(){
//     console.log(this.name    + this.roll + " and" + this.interest);
//   }
// };

// person.displayInfo();



// let person = {
//   name: "Hey my name is Raju ",
//   roll: "my roll is 43",
//   interest: "I love coding",

//   displayInfo: function() {
//     console.log(this.name + this.roll + this.interest);
//   }
// };

// // Call the displayInfo method to display information
// person.displayInfo();


//---5. Write a function to check if a number is odd or even----||--\\

// const number = 10
// if (number === 0){
//   console.log("Zero")
// }else if(number % 2 === 0) { 
// console.log(`${number} is even`)
// }else{
//   console.log(`${number} is odd`)
// }


// 4. Write a function which takes Celsius degree temperature as an argument and console log
// the equivalent Fahrenheit degree and kelvin.


// function convertTemparature(celsius){

//       const farenheit = (celsius * 9/5) + 32;

//       const kelvin = celsius + 273.15;


//       console.log(`${celsius} degree celsius is equal to ${farenheit.toFixed(2)} degrees farenheit and ${kelvin.toFixed(2)} kelvin. `);

// }

// const celsiusTemparature = 25;
// convertTemparature(celsiusTemparature);

 //==================Document Object Model (DOM)=========//
const container = document.querySelector(".container");

// container.classList.add("new");

//container.classList.toggle("container")

const b = document.querySelector(".one")

//b.textContent = "HELLO WORLD!"

const c = document.querySelector(".two");

const p = document.createElement("p")
p.textContent = "hellow world"
p.appendChild(p)

const j = document.queryselector("")