// Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)
// date is an object-------Interview questions

// let myCreatedDate = new Date(2024,0,23)
//  let myCreatedDate = new Date(2024,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());
// In Javascript month starts from 0 that means january is 0
let myCreatedDate= new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
// yaha lekin january 01 se shuru hota he 00 se nhi

let myTimeStamp = Date.now()
// exact time stamp ka value chaiye to use ata he
//  jese ki koi poll ya phir koi quiz
 

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));
// to redu ce the value of milliseconds and then floor to remove the decimal value

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getday()} and the time `

newDate.toLocaleString('default',{
    weekday:"long",
    // so we can acrually define timezone and weekday like mon or monday in long or short format in object
})
console.log(newDate)