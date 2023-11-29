//Pop up
alert("Hello World");
alert("Nama Saya Evandri Ridho Hasmono");

// Data Type
typeof(2); //Numbers
typeof("Hello"); //String
typeof(true); //Boolean

//Variabel
let nama = "Evandri";
let npm = 50422473;
let jurusan = "Informatika";

console.log("Nama saya "+nama + " ,NPM saya "+npm + " ,Dan saya dari jurusan "+jurusan);

var a = "5";
var b = "8";
var hasil = a + b;
console.log("Hasil dari penjumlahan 5 dan 8 adalah "+ hasil);

// CodingExercise1 
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:

var temp = a; // temp adalah variabel sementara
    a = b;
    b = temp;
    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}
