const prompt = require("prompt-sync")({ sigint: true });
const angka1 = prompt("Masukan Angka : ");

if (angka1 < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (angka1 % 2 !== 0) {
  console.log("Tidak bisa input bilangan ganjil");
} else {
  const result = Math.sqrt(angka1);
  console.log("Hasil " + angka1 + " pangkat 2 adalah " + result);
}
