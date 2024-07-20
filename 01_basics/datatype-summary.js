//  Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
// apko jab bhi inki value di jati he 
// to apko original value nhi di jati but
// apko copy di jati he. agar koi change 
// bhi karna ho to wo bhi copy me hi hoti he

// ?ReferenceError(Non Primitive)

const score=100
const scoreValue=100.3

const isLoggedIn=false 
const outsidetemp=null;
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')
// output here is false because symbol also genartes a distinct symbol hence they will not be equal

console.log(id===anotherId);

// const bigNumber=47238428409248488487n

// reference(Nin Primitive)

// Array, objects, Functions

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Badal",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");

}

    console.log(typeof bigNumber);
    // value typeof bigint is undefined
    console.log(typeof outsidetemp);
    console.log(typeof myFunction);






// Array, Objects, Functions
//  javascript is a dynamically typed language

// +++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive)original value ki copy,
//  Heap(Non Primitive) original value ka reference
let myyoutubechannel="hiteshchoudharydotcom"

let anothername=myyoutubechannel
anothername="chaiorcode"

console.log(myyoutubechannel);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

