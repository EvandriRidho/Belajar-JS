// SLICE AND SPLICE

var hari = ["Senin", "Rabu"];

hari.splice(1,0,"Selasa"); // Splice berfungsi untuk menyisipkan ke array
console.log(hari.join());

let originalArray = [1, 2, 3, 4, 5];
let slicedArray = originalArray.slice(1, 4); // slice untuk memotong array

console.log(originalArray.join()); 
console.log(slicedArray.join());

// FOREACH AND MAP
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) { //ForEach
  console.log(number);
});

const words = ['apple', 'banana', 'cherry'];

const capitalizedWords = words.map(word => word.toUpperCase()); //Map

console.log(capitalizedWords);

console.log(squaredNumbers);
// SORT
var angka = [1,3,4,2,7,6,5]; // Sort untung mengurutkan angka
angka.sort(function(a,b) {
    return a-b
});
console.log(angka.join());
// FILTER AND FIND
const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitWithA = fruits.find(fruit => fruit.includes('a')); // Find

console.log(fruitWithA);


const animals = ['cat', 'dog', 'elephant', 'cheetah', 'tiger', 'lion'];
const animalsWithC = animals.filter(animal => animal.startsWith('c')); // Filter

console.log(animalsWithC);
