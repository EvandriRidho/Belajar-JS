// SLICE AND SPLICE
var hari = ["Senin", "Rabu"];

hari.splice(1,0,"Selasa"); // Splice berfungsi untuk menyisipkan ke array
console.log(hari.join());

let originalArray = [1, 2, 3, 4, 5];
let slicedArray = originalArray.slice(1, 4); // slice untuk memotong array

console.log(originalArray.join()); 
console.log(slicedArray.join());

// ForEach & MAP
var nama = ["Evandri","Davina"];
var angka = [1,2,3,4,5];

angka.forEach(function(e) {  // Pengaplikasian ForEach
    console.log(e);
});

nama.forEach(function(e, i) { // ForEach tidak mengembalikan ( return ) Array
    console.log("Saya orang ke " + (i+1) + " dan nama saya " +e);
});

var num = [1,3,4,5,2,7,6]; // Pengaplikasian Map
var num2 = num.map(function(e) { // Map dapat mengembalikan nilai Array
    return e * 2
});
console.log(num2.join());

// Sort
var numb = [1,3,5,2,4,10,20,30]; // Sort berfungsi untuk mengurutkan nilai
numb.sort(function(a,b) {
    return a-b;
});
console.log(numb.join());

// Filter & Find
var angkas = [1,2,3,4,5,6,7,8,9]; // Filter mengembalikan dalam bentuk array dan bisa lebih dari 1 karna bersifat array
var angkas2 = angkas.filter(function(x) {
    return x >= 5;
});
console.log(angkas2.join());

var numbs = [1,2,3,4]; // Find tidak mengembalikan array hanya mengembalikan 1 nilai
var numbs2 = numbs.find(function(z) {
    return z == 3;
});
console.log(numbs2); // tidak ada method join karna tidak dicetak dalam bentuk array
