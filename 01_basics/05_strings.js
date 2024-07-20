const name="hitesh"
const repoCount=50

// console.log(name+ repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);


const gameName= new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);
// to know about the prototype of the string and after running it gives a empty object{}
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   Hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

// read about trim in mdn docs

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesl'))

console.log(gameName.split('-'));