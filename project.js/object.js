             
             
             //=========OBJECT-ONE=========//
//singleton

// object literals
//Object.create

// const mySym = Symbol("key1")
// const jsUser = {
//     name: "Atin ",
//     "full name": "Atin Mondal",
//    [mySym]: "mykey1",
//     age: 18,
//     location: "Mecheda",
//     email: "atin@gmail.com",
//     isLoggedIn: false,
//     lastloginDays: ["Monday","saturday"]
// }

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.email = "atin@chatgpt.com"
// //Object.freeze(jsUser)
// jsUser.email = "atin@microsoft.com"
// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("Hello JS user");
// }  
// jsUser.greetingTwo = function(){
//     console.log(`Hello JS user,${this.name}`);
// }  


// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


//==========OBJECT-TWO==========//

//const tinderUser = new objects()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser) 

const regularUser = {
    email: "atin@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Atin",
            lastname: "Mondal"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1:"a",2: "b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}

console.log(obj3)


const users = [
    {
        id: 1,
        email: "atin@gmail"
    },
    {
        id: 1,
        email: "atin@gmail"
    },
    {
        id: 1,
        email: "atin@gmail"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


console.log(tinderUser.hasOwnProperty("isLogged"))

