//if
const isUserLoggedIn=true

if(2==="2"){ //strict equal check === check the datatype also one is string and the other is a number
    console.log("executed");

}
// < ,>,<=,>=,==,!=,===

const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
// }

// console.log(`user power:${power}`);

const balance=1000

if(balance>500)console.log("test");//implicit scope ek line me he to scope man liya gya he aur end me semicolon(;) necessary he

// if(balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");

// }

const userLoggedIn= true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFomEmail=true

if(userLoggedIn&& debitCard&&2==2){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFomEmail){
    console.log("Allow to buy the course");
}
 

