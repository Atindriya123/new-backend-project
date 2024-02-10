
// for(let index = 0;index<=10;index++){
//     const element = index;
//     if(element===5){
//         console.log("5is best")
//     }
//     console.log(element)
// }

for (let i = 1;i<=10;i++){
    console.log(`outer loop value: ${i}`);
    for(let j =1;j<=10;j++){
        // console.log(`inner loop value ${j} and inner loop ${i}`)
        console.log(i + ' *'+j+ "=" + i*j )
    }
}

// let myArray = ["flash","batman","superman"]

// for(let index =0;index<myArray.length;index++){
//     const element=myArray[index];
//     console.log(element)
// }

//===========BREAK & CONTINUE===========//

// for(let index = 1; index <= 20; index++){
//     if(index===5){
//         console.log(`detect 5`)
//         break
//     }
//     console.log(`value of i is ${index}`)
// }


for(let index = 1; index <= 20; index++){
    if(index===5){
        console.log(`detect 5`)
        continue
    }
    console.log(`value of i is ${index}`)
}