// // for of

// ["" ,"", ""]
// [{}, {}, {}]

// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// greetings="Hello World !"

// for (const greet of greetings) {
//     console.log(`Each character is: ${greet}`);
    
// }

// //Maps//map is an object

// const map = new Map()
// map.set('IN',"India")
// map.set('US',"United States Of America") 
// map.set('FR',"France")

// console.log(map);

// for (const[key,value]of map) {//[]ye lagane se array ka destructure hojayega
//     console.log(key,':-',value);
    
// }
// const myObject={
//         'game1' :' NFS',
//         'game2' : 'Spooderman'

// }

// for (const [key, value] of myObject) {// object is not iterable so it will give and error 
//     console.log(key,':-',value);
// }


    const myCoding=[
        {
        languageName: "javascript",
        languageFileName: "js"
        },
        {
            languageName: "java",
            languageFileName: "java"
            },
            {
                languageName: "python",
                languageFileName: "py"
                },
    ]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
 