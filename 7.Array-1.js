// Intro Array
var hari = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"]; //Pendeklarasian Array satu Dimensi
console.log(hari.length); // length untuk menghitung banyak array

var myArr = ["teks",2,false,9,[4,5,6]]; //Pendeklarasian Array Multi Dimensi
console.log(myArr[4][1]);

// Manipulasi Array
var arr =[];

arr[0] = "Ridho"; // Menambah Array
arr[1] = "Davina";
arr[2] = "Evan"

console.log(arr.join()); //Mengunakan method join untuk menampilkan array
arr[2] = undefined; // Menghapus Array

arr.push("Skater","Destroyer"); // Menambah Array menggunakan method
arr.pop(); // Menghapus Array menggunakan method
console.log(arr.join());
