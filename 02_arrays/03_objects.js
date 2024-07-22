//singleton
// object.create

// object literals


const mySym = Symbol("key1")//symbol declare for key 1

const JsUser={
    name: "Badal",
    "full name" :"Badal Jena",
    [mySym]:"mykey1",
    age:18,
    location:"Faridabad",
    email:"hitesh@google.com",
    isloggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)//dot(.)ki tarah lene pe
 //string ki tarah declare karne ki jarurat nhi padti
console.log(JsUser["email"])
//yaha pe email ko ek string ki tarah dena padta he
//kyoki agar direct hi de diya to error throw karega 
//aur wese bhi name ko string kara gaya he
console.log(JsUser["full name"]);
// it will not work for anything strings, . or anything it will only work for square brackets
//-----> console.log(JsUser.mySym)
console.log(JsUser[mySym])

JsUser.email = "badal@chatgpt.com"//to change the value inside object
//Object.freeze(JsUser)//it freezes the value of object and it cannot go for further change
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello Js User")

}
JsUser.greetingtwo=function(){
    console.log(`Hello JS use,${this.name}`);
}

console.log(JsUser.greeting)

