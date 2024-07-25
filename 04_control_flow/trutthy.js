const userEmail=[]

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("dont have user Email");
}

//falsy values

// false,0,-0, BigInt 0n,"", null, undefined, NaN 

// truthy values
// "0", 'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is ");
// }
const emptyobj={}

if(Object.keys(emptyobj).length===0){ //obj.key will give an array and by applying.length and comparing it will 0 it  gives true
    console.log("Object is empty");
}

//Nullish coalescing Operator(??): null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??20





console.log(val1);




