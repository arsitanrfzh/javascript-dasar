console.log("Looping Aktivitas :");
console.log("=================================");

// Memulai perulangan dari 1 hingga 20 untuk simulasi aktivitas.
for (let i = 1; i <= 20; i++) {
  let output = ""; // Menyiapkan variabel untuk menyimpan nama aktivitas.

  // Cek utama: apakah angka (i) bisa dibagi 3?
  if (i % 3 === 0) {
    // JIKA KELIPATAN 3:
    // Cek lagi, apakah angkanya juga genap?
    if (i % 2 === 0) {
      // Genap (berarti kelipatan 6): Mendapat sertifikat.
      output = "Mendapat sertifikat";
    } else {
      // Ganjil: Mengikuti uji kompetensi.
      output = "Mengikuti uji kompetensi";
    }
  } else {
    // JIKA BUKAN KELIPATAN 3:
    // Cek, apakah angkanya genap?
    if (i % 2 === 0) {
      // Genap: Mengikuti pelatihan.
      output = "Mengikuti pelatihan";
    } else {
      // Ganjil: Apel pagi.
      output = "Apel pagi";
    }
  }
  // Mencetak nomor urut beserta hasil aktivitas yang sesuai.
  console.log(`${i}. ${output}`);
}