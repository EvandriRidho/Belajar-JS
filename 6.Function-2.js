// Variabel Scope
var i = 2; // Variabel Global

if ( i % 2 == 0) {
    var genap = true; // Variabel lokal
}

if ( genap) {
    console.log("Genap!");
}

var a = 1;

function test(a) {
    console.log(a); // a dalam argument adalah variabel lokal
}

test(2);
console.log(a);


// Rekursif
function cetakAngka(n) {
    if(n == 0) {
        return;
    } // ini berfungsi sebagai base case untuk menghentikan program
    console.log(n);
    cetakAngka(n-1); // rekursif yang akan terus memanggil jika tidak ada base case
}

console.log(cetakAngka(10));

function faktorial(n) {
    if ( n === 0) {
        return 1;
    }

    return n * faktorial(n-1);
}
console.log(faktorial(5));


// DECLARATION vs. EXPRESSION
function namaSaya(nama) { // DECLARATION
    alert("Halo nama saya "+nama);
}
namaSaya("ridho");

const square = function multiply(x) { // EXPRESSION
    return x * x;
}
console.log(square(5)); 
// EXPRESSION Function harus ada pendeklarasian Variabelnya
// EXPRESSION LEBIH POWERFULL DAN DIGUNAKAN UNTUK JS MODERN