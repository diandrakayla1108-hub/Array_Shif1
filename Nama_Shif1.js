// Membuat array yang berisi nama
let nama = [
    "1.ANISA ISTIKOMA",
    "2.ASHLEY AURELLIA NOMI PUTRI",
    "3.ALYANI ROFIYAH",
    "4.BUNGA SASI KIRANA",
    "5.BUNIA ASYIROTUL KARIMAH",
    "6.DELLA AGUSTINA WIDIYANI",
    "7.DEWI AFIFATU ZUHRO",
    "8.DINI FEBTIA MURNI",
    "9.DIANDRA KAYLA ARAMITA",
    "10.IHZAN GUNAWAN",
    "11.LUCKY ADI IRAWAN",
    "12.M ZAINUL HAQI",
];

// Menampilkan semua nama
console.log("NAMA SHIF1:");

for (let i = 0; i < nama.length; i++) {
    console.log(nama[i]);
}




// =======================================================
// TUGAS LANJUTAN
// =======================================================

// 1. Array dimulai dari index berapa?
// Jawab: Array dimulai dari index 0
console.log("Array dimulai dari index 0");
console.log("");

// 2. Tampilkan index sesuai nama masing-masing
console.log("8. DIANDRA KAYLA ARAMITA:");
for (let i = 0; i < nama.length; i++) {
  console.log("Index " + i + " : " + nama[i]);
}

console.log("");

// 3. Tampilkan data, jika data index ke-3 maka lewati / jangan ditampilkan
console.log("3. BUNGA SASI KIRANA:");
for (let i = 0; i < nama.length; i++) {
  if (i === 3) {
    continue; // ini buat lewatin index 3
  }
  console.log("Index " + i + " : " + nama[i]);
}

