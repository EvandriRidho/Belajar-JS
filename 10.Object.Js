// Membuat OBJECT
var mhs = { // Object Literal
    nama : "Evandri Ridho Hasmono", // Disini saya membuat sebuah Object
    umur : 19,                      // Object adalah tipe data yang lebih canggih dari Array
    Ips : [3.6 , 4.0],
    alamat : {
        jalan : "Jl.ABC",
        kota : "Bekasi",
        Provinsi : "Jawa Barat",
    }
};

function objectMahasiswa(nama,jurusan,umur) { // Function Declaration
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.jurusan = jurusan;
    mahasiswa.umur = umur;
    return mahasiswa;
}

var mhs2 = objectMahasiswa("Evandri","Informatika",19); // Object bisa dibuat berulang dengan Function Declaration
var mhs3 = objectMahasiswa("Davina","Manajemen",19);

function Mahasiswa(nama,jurusan,umur) { // Function Constructor
    this.nama  = nama; 
    this.jurusan = jurusan;
    this.umur = umur;
}

var mhs4 = new Mahasiswa("Bani","Psikologi",19);
