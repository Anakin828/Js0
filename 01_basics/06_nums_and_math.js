const score=400
console.log(score);

const balance=new Number(100)
// new object jo number type ka he upar
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=1123.8966
// then it will show exponential for1123.8966 like 1.12e+3

console.log(otherNumber.toPrecision(3));

const hundereds=1000000
console.log(hundereds.toLocaleString('en-IN'));
// for converting from U.S number system to Indian number system we use IN

// +++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
// -4 +4 hojayega absolute value dene se
console.log(Math.abs(4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,10,2));

console.log(Math.random());
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);
// to avoid case like 0.04 when we multiply 10 with it it gives us 0.4 which is so to avoid such values in random number we add a +1 to it

const min =10
const max =20

console.log(Math.floor(Math.random()*(max - min + 1))+min);
// taki agar value minnimum to 10 ya usse upar hi ho
// *(max - min + 1) isko karne se badi value milti he