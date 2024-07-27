const coding=["js","ruby","java","python","cpp"]


// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.filter((num)=> {return num>=4})

// const newNums=[]

// myNumbers.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums); 

const books=[
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'History', publish: 1995, edition: 2008},
    {title: 'Book Three', genre: 'Fiction', publish: 1998, edition: 2007},
    {title: 'Book Four', genre: 'Poetry', publish: 2007, edition: 2010},
    {title: 'Book Five', genre: 'science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'science', publish: 1956, edition: 2010},
    {title: 'Book Seven', genre: 'computer science', publish: 1986, edition: 1989 },

];

const userBooks=books.filter((bk) => bk.genre === 'Fiction' && bk.edition>=2007)

console.log(userBooks); 