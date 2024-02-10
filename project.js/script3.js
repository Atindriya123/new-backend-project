// write a function one number is odd or even.//

// const num = 10;

// if (num === 0){
//     console.log("Zero")
// }else if(num % 2 === 0){
//     console.log(`${num} is even`)
// }else{
//     console.log(`${num} is odd`)
// }



// 4. Write a function which takes Celsius degree temperature as an argument and console log
// the equivalent Fahrenheit degree and kelvin.

// function convertTemparature(celsius){
//     const farenheit = (celsius * 9/5) + 32;
//     const kelvin  = (celsius + 273.15);

//     console.log(`${celsius} is equal to degrees farenheit ${farenheit.toFixed(2)} degress ${kelvin} kelvin.`);
// }

// const celsiusTemparature = 20;
// convertTemparature(celsiusTemparature);



// function findGreatestNumber(num1, num2, num3){
//     const greatest = Math.max(num1, num2, num3);

//     console.log(`The greatest number among ${num1}, ${num2}, ${num3} is: ${greatest}`);
// }

// const num1 = 10;
// const num2 = 12;
// const num3 = 15;


// findGreatestNumber(num1, num2, num3);

// Function to print the multiplication table for 7
// function printMultiplicationTable() {
//     console.log("Multiplication Table for 7:");

//     for (let i = 1; i <= 10; i++) {
//         const result = 7 * i;
//         console.log(`7 * ${i} = ${result}`);
//     }
// }

// // Calling the function to print the table
// printMultiplicationTable();


//Print all the multiplication tables with numbers from 1 to 10

// function printMultificationTables(){
//     console.log("Multification Tables from 1 to 10");

//       for(let i = 1; i <= 10; i++){
//         console.log(`\nMultification Tablefor ${i}:`);

//         for(let j = 1; j <= 10; j++){
//             const result = i * j;
//             console.log(`${i} * ${j} = ${result}`)
             
        
        
//         }

// }
// }
// printMultificationTables();


// 3. Write a function which takes name, roll number and area of interest of the user as
// arguments and console log in this format.
//  Hey my name is Raju, my roll number is 43 and I love coding.


// const person = {
//      name : "Hey my name is Raju",
    
//      roll : "my roll number is 43",

//      interest : "I love coding",

//      displayInfo: function(){
//         console.log(`${this.name} , ${this.roll} , ${this.interest}`)
//      }

// }
// person.displayInfo();



// //A company decided to give 5% of bonus to his employee if his/her year of service is more
// than 5 years. Write a function which takes salary and year of service as arguments and
// console log the net amount.


// function calculateNetAmaount(salary,yearOfService){
//     const bonusPercentage = 5;
    
//     const bonus = (yearOfService > 5) ? (bonusPercentage/100) * salary : 0;    // jodi  yearof service  5 yr r besi hoy tobe bonus calculate hoche na hle bonus pa6e na
     
//     const netAmaunt  = salary + bonus;  // net salary calculate ho6e bonus add kore.

//     console.log(`Employee is ${yearOfService > 5 ? "eligible" : "not eligible"} for a ${bonusPercentage}% bonus`) // console show kora ho6e ternary operator use kore jeta consice form if or else if r

//     console.log(`Net Amaount: ${netAmaunt}`);  // net amaount show kora ho6e.

// }

// const salary = 15000;
// const yearOfService = 8;

// calculateNetAmaount(salary,yearOfService); // salay or yearof service argument pass kora ho6e.



// function calculateNetAmaount(salary, yearOfService){
//     const bonusPercentage = 5;
    
//     if(yearOfService > 5){
//         const bonus = (bonusPercentage/ 100) * salary;
//         const netAmount = salary + bonus;
        
//         console.log(`Employee is elegible for ${bonusPercentage}% of bonus.`);
//         console.log(`Net Amount: ${netAmount}`);

//     }else{
//         console.log(`Employee is not eligible for bonus`);
//         console.log(`Net Amount: netAmount`);
//     }
// }

// const salary = 20000;
// const yearOfService = 7;

// calculateNetAmaount(salary, yearOfService);





// 11. A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Write a function which takes marks as an argument and console log the corresponding
// grade.



// function calculateGrade (marks){
//     let grade;
 
//     if(marks < 25){
//        grade = 'F';
//     }else if(marks >= 25 && marks < 45){
//        grade = 'E';
//     }else if (marks >=45 && marks < 50){
//        grade = 'D';
 
//     }else if(marks>=50 && marks < 60){
//        grade = 'C'
//     }else if(marks>=60 && marks < 80 ){
//            grade = 'B';
//     }else {
//        grade = 'A';
//     }
 
//     console.log(`Marks: ${marks} Grade: ${grade}`);
//  }
 
//  calculateGrade (35);


// // 12. A shop will give discount of 10% if the cost of purchased quantity is more than 1000. Ask
// user for quantity. Suppose, one unit will cost 100. Write a function which return total cost
// for user.

// function calculateTotalCost(quantity) {
//     const unitCost = 100;
//     const discountThreshold = 1000;
//     const discountPercentage = 10;
  

//     // Calculate total cost without discount
//     let totalCost = quantity * unitCost;

//     // Apply discount if the total cost is more than 1000
//     if (totalCost > discountThreshold) {
//         const discountAmount = (discountPercentage / 100) * totalCost;
//         totalCost -= discountAmount;
//     }

//     return totalCost;
// }
// const quantity = 3000;
// const totalCost = calculateTotalCost(quantity);
// console.log(`The cost:  ${totalcost}`);


// // Example usage
// const userQuantity = parseInt(prompt("Enter the quantity:"));
// const totalCost = calculateTotalCost(userQuantity);
// console.log(`Total Cost: ${totalCost}`);


// // 12. A shop will give discount of 10% if the cost of purchased quantity is more than 1000. Ask
// user for quantity. Suppose, one unit will cost 100. Write a function which return total cost
// for user.

// function calculateTotalCost (quantity){
//     const discount = 10;
//     const discountThreshold =  1000;
//     const unitCost = 100;

//     const totalCost = quantity * unitcost;

//     if(totalcost > discountThreshold){
//         const discountAmount = (discount/100) * totalCost;
//         totalCost -= discountAmount;

//         return totalCost;
//     }
// }

// const quantity= 3000;

// console.log(calculateTotalCost(quantity));





// function calculateTotalCost(quantity) {
//     const discount = 10;
//     const discountThreshold = 1000;
//     const unitCost = 100;

//     const totalCost = quantity * unitCost;

//     if (totalCost > discountThreshold) {
//         const discountAmount = (discount / 100) * totalCost;
//         totalCost -= discountAmount;

//         return totalCost;
//     }
// }

// const quantity = 3000;

// console.log(calculateTotalCost(quantity));


//-----------Array-----------//

// const students = ["Atin","kartick","vuto", "monu"];

// function showStudent() {
//     console.log(students.length);
//     for (let i = 0; i <=students.length-2; i++){
//         console.log(students[i]);
//     }
// }

// showStudent();




// function showStudent(){
//     const students = ["Atin","kartick","vuto", "monu"];
//     for (let i = 0; i <= students.length-1;  i++){
//         if (students[i]!== "vuto"){
//             console.log(students[i]);
//         }
//     }
// }
// showStudent();

// const numbers = [10,21,32,44,20,11,3,5];
// function showNumber(){
// let sum = 0;

// for (let i = 0;i <numbers.length; i++ ){
//     sum += numbers[i];
// }
//  console.log( sum);
// }

// showNumber();


//========Array push method======////=====splice,push,pop,unsift,sift.
 const students = ["Atin","kartick","vuto", "monu"];

 console.log(students);
 students.splice(1,0,'sujan');

 console.log(students);


// const numbers = [10, 21, 32, 44, 20, 11, 3, 5];

// // Initialize sum to 0
// let sum = 0;

// // Loop through the array and add each element to the sum
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log("Sum of the numbers:", sum);


// slice sub String.
// spit,splice.