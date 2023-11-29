// If - Else
let noAngkot = 1;
let angkoBeroperasi = 6;
let angkotTidakBeroperasi = 7;
let jmlAngkot = 10;
for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if( noAngkot <= angkoBeroperasi) {
        alert("Angkot No."+noAngkot+ " Beroperasi dengan Baik");
    } else {
        alert("Angkot No."+noAngkot+" Sedang tidak beroperasi");
    }
}

// If - Else If - Else
let noMotor = 1;
let motorBeroperasi = 6;
let motorTidakBeroperasi = 7;
let jmlMotor = 10;
for(noMotor; noMotor <= jmlMotor; noMotor++) {
    if(noMotor <= motorBeroperasi && noMotor !== 5) {
        alert("Motor No."+noMotor+" Beroperasi dengan baik");
    }else if(noMotor === 7) {
        alert("Motor No."+noMotor+" Sedang tidak beroperasi");
    }else if(noMotor === 8 || noMotor === 10 || noMotor === 5) {
        alert("Motor No."+noMotor+" Sedang Lembur");
    }else {
        alert("Motor No."+noMotor+" Sedang tidak beroperasi");
    }
    
}

// Switch Case
let nilai = 80;

switch(true) {
    case nilai >= 90:
        console.log("Good Job bro, :)");
        break;

    case nilai >= 80:
        console.log("Mayan lah");
        break;

    case nilai >= 70:
        console.log("Bjir, NT dah");
        break;

    default:
        console.log("TOLOL ANJ")
}
