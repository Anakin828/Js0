//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isloggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
      userfullname:{
        firstname:"Badal",
        lastname:"Jena"
      }  
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2: "b"}
const obj2={3:"c", 4:"d"}

//const obj3={obj1,obj2}
// const obj3=object=Object.assign({}, obj1, obj2)
// console.log(obj3);
const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"

},
    {
        id:1,
        email:"h@gmail.com"

},
    {
        id:1,
        email:"h@gmail.com"

},
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course={
  corsename:"js in hindi",
  price:"999",
  courseInstructor:"hitesh"

}
course.courseInstructor

const{courseInstructor}=course
//console.log(courseInstructor);
console.log(instructor);

// {
//   "name":"hitesh",
//   "coursename": "js in hindi",
//   "price": free,

// }

[
  {},
  {},
  {},
]


