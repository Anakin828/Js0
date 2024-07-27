const myObject={
    js : 'Javascript',
    cpp : 'c++',
    swift: 'Swift by apple',
    rb : 'Ruby for rails'
}

for (const key in myObject) { //for in loop
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
 console.log(programming[key]);
}
