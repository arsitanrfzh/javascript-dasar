// Membuat array kosong bernama daftarBelanja
let daftarBelanja = [];

// Menambahkan data belanja menggunakan push()
daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Gula");

// Mencari indeks elemen "Minyak"
let indeksMinyak = daftarBelanja.indexOf("Minyak");

// Menghapus elemen "Minyak" jika ditemukan
if (indeksMinyak !== -1) {
  daftarBelanja.splice(indeksMinyak, 1);
}

// Menambahkan elemen baru di akhir array untuk mendapatkan urutan yang benar
daftarBelanja.push("Buah");
daftarBelanja.push("Sayur");
daftarBelanja.push("Telur");

// Mengurutkan array secara alfabetis
daftarBelanja.sort();

console.log("Daftar Belanja Ibu Lily :")
// Menampilkan isi array dengan nomor urut
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(`${i + 1}. ${daftarBelanja[i]}`);
}