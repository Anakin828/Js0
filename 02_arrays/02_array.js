const marvel_heroes=["thor", "Ironman","spiderman"]
const dc_heroes=["superman", "batman","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const all_heros=marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);
console.log(all_heros)
const allheros=[...marvel_heroes,...dc_heroes]
// console.log(allheros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));

