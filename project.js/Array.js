

//---------Array Part-01----------\\


// const myArr = [0,1,2,3,4,5];

// const myHeros = ["kartick", "vuto", "monu","pulok"];

// // const myArray2 = newArray (1,2,3,4);

// console.log (myArr);

//Array methods

// myArr.push(6)
// myArr.pop(6)
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr)

// //==========slice, splice========//

// console.log("A", myArr);

// const myn1 = myArr.slice(1 ,3)

// console.log(myn1);

// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)

// console.log("c", myArr);
// console.log(myn2);

//--------------Array Part_Two----------////------concat and spread operator.//

// const marvel_heros = ["thor", "ironman", "flash", "spiderman"]

// const dc_heros = ["superman", "hanuman", "jambuuman"]

// marvel_heros.push(dc_heros)
// console.log( marvel_heros[3][2]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

// const allnewHeros = [...marvel_heros, ...dc_heros]

// console.log(allnewHeros);

// const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// const myArr = [0,1,2,3,4,5,]

// const myHeros = ["kartick","vuto", "keto"]

// console.log(myArr)

//----Array Method--//
// myArr.push(6)
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myHeros.indexOf("vuto"))

// const newArr = myArr.join()
// console.log(typeof newArr)

// ----slice and splice----//

// console.log("A", myArr)

// const myn1 = myArr.slice(1,3)

// console.log(myn1);

// console.log('C', myArr)
// const myn2 = myArr.splice(1,3)
// console.log(myArr)


// const marvel_heros = ["Thor","vuto",'keto','monu']
// const dc_heros = ["hanuman","jambuman","hanuman"]

// const all_newheros = [...marvel_heros , ...dc_heros]

// console.log( all_newheros)


// const another_array = [1,2,3,[4,5,6],7,[8,9,2,[1,2,5]]]

// const real_another_array = another_array.flat(Infinity)
//  const vvv=real_another_array.join()

// console.log(real_another_array);




console.log(Array.isArray("atin"))

console.log(Array.from("atin"))

console.log(Array.from({name: 'Atin'}))

// let sc1 = 100
// let sc2 = 200
// let sc3 = 300

// console.log(Array.of(sc1,sc2,sc3))

// const students = ["Atin", "keto","vuto", "guddu"]

// function showStudents (){
//     console.log(students.length)
//     for(let i = 0; i <= students.length -1; i++){
//     console.log(students[i]);
//   }
// }

// showStudents();

// const students2 = ["Atin", "keto","vuto", "guddu"]

// function showstudents2(){
//     for(let i = 0; i<= students2.length-1; i++){
//         if(students2[i]!== "vuto")
//         console.log(students2[i])
//     }
   
// }
// showstudents2();

// const numbers = [10,20,30,40,50,60,70,90]
// function showNumbers (){
//     let sum = 0
//     for(i = 0; i<numbers.length; i++){
//         sum += numbers[i]
        
//     }
//     console.log(sum)
// }
// showNumbers ();

// const students2 = ["Atin", "keto","vuto", "guddu"]

// console.log(students2)
//  students2.splice(1,2,'chintu' )

// console.log([ students2]);

// const arr = [1,2,3,4,5,]

// for(const num of arr){
//     console.log(num)
// }

// const greetings = "Hellow world!"
// for(const greet of greetings){
//     console.log(`each char is${greet}`)
// }

//maps //

const map = new Map()
map.set('In',"India")
map.set('USA', "united staes of america")
map.set("fr","france")

console.log(map)

for(const [key, value] of map){
    console.log(key, ':-',value);
}

// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// const car = {
//     brand: "Tyota",
//     color: "Black",
//     year: "2018",
//     start:  function(){
//         console.log("Starting...")
//     },

// };

// console.log(car.color)

// car.start()

// const students ={
//     calss: "Eight",
//     Rollno: "7",
//     Section: 'B',
// }

// for(const key in students){
//     console.log(`${key} students is ${students[key]}`)
// }

// const student = {
//     firstName: "John",
//     lastname: "doe",
//     age: 26,
//     getFulName: function(){
//         const fullName =  this.firstName + " " + this.lastname;
//         console.log(fullName);
//     }
// };

// student.getFulName();

const myCoding = [
{
  languageName: "Javascript",
  languageFileName:"js"  
},
{
    languageName: "python",
    languageFileName:"pip"  
  },
  {
    languageName: "csharp",
    languageFileName:"js"  
  },
]

myCoding.forEach((item)=> {
    console.log(item.languageFileName);
})



// const coding =  ["js", "python", "cpp", "ruby"]

// // coding.forEach( (item, index, arr)=>{
// //     console.log(item,index,arr);
// // })
//=======CALLBACK FUNCTION====//
// const myNums = [1,2,3,4,5,6,7,8,8,]

// const newNums=myNums.filter((num)=> {
//     return num>4} ) 
//    console.log (newNums);



const myNumbers = [1,2,3,4,5,6,7,8,9,10]

 const newNums=myNumbers.map((num)=> num + 10)
console.log(newNums);

//----***CHAINING***----//

// const newNums = myNumbers
//                .map((num)=>num *10)
//                .map((num)=> num + 1)
//                .filter((num)=> num>=40)

//     console.log(newNums);           



//=======***REDUCE==========//

const myNums = [1,2,3,]
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
},3)

console.log(myTotal)

// const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal)


const shoppingcart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "data science",
        price:5000

    },
    {
          itemName: "py course",
          price: 4000

    },
]

const priceTopay=shoppingcart.reduce((acc,item)=>  acc+item.price,0)
console.log(priceTopay)