// Membuat & Memanggil Function
function jumlahVolumeKubus(a,b) { // Mendeklarasikan fuction dengan parameter
    let volumeKubusA = a * a * a; // pendeklarasian variabel
    let volumeKubusB = b * b * b;

    let total;

    total = volumeKubusA + volumeKubusB; 

    return total; //Mengembalikan nilai
}

console.log(jumlahVolumeKubus(3,8)); //Mencetak dengan argument
console.log(jumlahVolumeKubus(10,15));

// parameter & Argument
function tambah(c,d) { // parameter adalah variabel yang ditulis di dalam kurung
    return c + d;
}

let c = parseInt(prompt("Masukan nilai C : "));
let d = parseInt(prompt("Masukan nilai D : "));

console.log(tambah(c,d)); // argument adalah nilai yang dikirimkan ke parameter

// Refactoring sederhana
function test(e,f) {
    return e * e * e + f * f * f;
}

console.log(test(8,3));
// Refactoring adalah kegiatan menyederhanakan / membuat code lebih enak dibaca
