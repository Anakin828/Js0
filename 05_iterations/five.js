const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (item){
    console.log(item);
})


coding.forEach((item)=>{
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //function as a parameter in for each loop

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})