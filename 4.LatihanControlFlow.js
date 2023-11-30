// Latihan Segitiga
const tinggiSegitiga = 5; 

for (let i = 1; i <= tinggiSegitiga; i++) {
  let bintang = '';
  for (let j = 1; j <= i; j++) {
    bintang += '* ';
  }
  console.log(bintang);
}

// Latihan Suwit
const suitOptions = ["batu", "gunting", "kertas"];
let playerScore = 0;
let computerScore = 0;

console.log("Selamat datang di permainan Suwit Jawa!");

while (true) {
  console.log("\nPilihan: 1. Batu, 2. Gunting, 3. Kertas, 0. Keluar");
  const playerChoice = parseInt(prompt("Masukkan pilihan Anda:"));

  // Keluar dari permainan jika pemain memilih 0
  if (playerChoice === 0) {
    break;
  }

  if (playerChoice < 1 || playerChoice > 3) {
    console.log("Pilihan tidak valid. Silakan pilih lagi.");
    continue;
  }

  const computerChoiceIndex = Math.floor(Math.random() * 3);
  const computerChoice = suitOptions[computerChoiceIndex];

  console.log(`Komputer memilih: ${computerChoice}`);

  const playerSelected = suitOptions[playerChoice - 1];

  console.log(`Anda memilih: ${playerSelected}`);

  if (playerSelected === computerChoice) {
    console.log("Hasil: Seri!");
  } else if (
    (playerSelected === "batu" && computerChoice === "gunting") ||
    (playerSelected === "gunting" && computerChoice === "kertas") ||
    (playerSelected === "kertas" && computerChoice === "batu")
  ) {
    console.log("Hasil: Anda Menang!");
    playerScore++;
  } else {
    console.log("Hasil: Anda Kalah!");
    computerScore++;
  }

  console.log(`Skor Anda: ${playerScore}, Skor Komputer: ${computerScore}`);
}

console.log("Terima kasih sudah bermain!");
