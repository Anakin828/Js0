const myNums=[1,2,3]

const myTotal=myNums.reduce(function(accumulator,currentvalue){
    return accumulator+currentvalue
},0)
//0 is the value from which accumulator is satrting and it is after function

const myTotalval= myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotalval);

const shoppingCart=[
    {
      itemName: "js course",
      price: 2999  
    },
    {
      itemName: "python course",
      price: 999  
    },
    {
      itemName: "mobile development course",
      price: 5999  
    },
    {
      itemName: "data science course",
      price: 12999  
    },
]

finslPriceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(finslPriceToPay);