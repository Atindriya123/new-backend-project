
function addTwoNumbers(num1,num2){
    let result = num1 + num2

   // return result
   return num1 + num2
}
const result = addTwoNumbers(4,5)

//console.log("Result: ", result);

function loginUserMessege(username = "keto"){
  
if(!username){
    console.log("plese enter a username")
    return
}
    return  `${username} just logged in`
}

console.log(loginUserMessege("Atin"))

console.log(loginUserMessege())

//=========FUNCTION-TWO==========//

//====spread or Rest operator=====// 

function claculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(claculateCartPrice(200,3000,2000,500))

const user = {
    username: "Atin",
    prices: 199
}



function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}

//handleObject(user)
handleObject({
    username : "sam",
    prices: 899
})


const myNewArray = [200,4500,500,600]

function returnSecondValue(getArray){
    return getArray[1] 
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,4500,500,600]))


function mergeArrays(arr1, arr2) {
    const mergedArray = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            mergedArray.push(arr1[i]);
            
        }
        if (i < arr2.length) {
            mergedArray.push(arr2[i]);
        }
    }

    return mergedArray;
}

// Example usage:
const array1 = [1, 3, 5];
const array2 = [2, 4, 6, 8];

const mergedResult = mergeArrays(array1, array2);
console.log(mergedResult);