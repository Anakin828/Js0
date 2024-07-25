//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element ==5){
        console.log("5 is the best number");
    }
    console.log(element);

    
}
// for (let i = 1; i < 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j < 10; j++) {
// //console.log(`Inner loop value is : ${j} and inner loop ${i}`);
// console.log(i+'*'+j+'='+i*j);
    
//   }
    
// }//to print table

let myarray=["flash","superman","batman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

// break and continue 
// for (let index = 1; index < 20; index++) {
//     if(index==5){console.log('5 is detected');
//         break
//     }
//         //after 5 is detected it will break out of the loop

//     console.log(`Value of index is ${index}`);
// }


//continue
for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log('5 is detected');
       continue
    }
       
    console.log(`Value of index is ${index}`);
}
    


