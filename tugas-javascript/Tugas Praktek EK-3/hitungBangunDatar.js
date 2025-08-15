// Fungsi untuk menghitung luas persegi
function luasPersegi(sisi) {
  return sisi * sisi;
}

// Fungsi untuk menghitung keliling persegi
function kelilingPersegi(sisi) {
  return 4 * sisi;
}

// Fungsi untuk menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

// Fungsi untuk menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

// Fungsi untuk menghitung luas segitiga
function luasSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}

// Fungsi untuk menghitung keliling segitiga (dengan asumsi segitiga sama sisi)
function kelilingSegitiga(sisi) {
  return 3 * sisi;
}

// Fungsi untuk menghitung luas lingkaran
function luasLingkaran(jariJari) {
  return (22 / 7) * Math.pow(jariJari, 2);
}

// Fungsi untuk menghitung keliling lingkaran
function kelilingLingkaran(jariJari) {
  return 2 * (22 / 7) * jariJari;
}

// Mendeklarasikan variabel
// Menyimpan angka-angka yang akan dihitung.
let sisiPersegi = 8; // Menambahkan deklarasi variabel untuk sisi persegi
let panjangPersegiPanjang = 9; // Menambahkan deklarasi variabel untuk panjang persegi panjang
let lebarPersegiPanjang = 3; // Menambahkan deklarasi variabel untuk lebar persegi panjang
let alasSegitiga = 6; // Menambahkan deklarasi variabel untuk alas segitiga
let tinggiSegitiga = 4; // Menambahkan deklarasi variabel untuk tinggi segitiga
let sisiSegitiga = 6; // Menambahkan deklarasi variabel untuk sisi segitiga
let jariJariLingkaran = 6; // Menambahkan deklarasi variabel untuk jari-jari lingkaran

console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====");
console.log("");

console.log(">> Luas Bangun Datar <<");
// Memanggil fungsi luasPersegi dengan memberikan argumen (nilai sisi persegi).
console.log("Luas Persegi Dengan Sisi" + sisiPersegi + "Adalah:", luasPersegi(sisiPersegi));
console.log("Luas Persegi Panjang Dengan Panjang" + panjangPersegiPanjang + "dan" + lebarPersegiPanjang + "Adalah:", luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
// Memanggil fungsi dengan variabel jari-jari yang sudah dideklarasikan.
console.log("Luas Lingkaran Dengan Jari-jari " + jariJariLingkaran + " Adalah:", luasLingkaran(jariJariLingkaran));
console.log("Luas Segitiga Dengan Alas" + alasSegitiga + "dan" + tinggiSegitiga + "Adalah:", luasSegitiga(alasSegitiga, tinggiSegitiga));

console.log("");

console.log(">> Keliling Bangun Datar <<");
console.log("Keliling Persegi Dengan Sisi" + sisiPersegi + "Adalah:", kelilingPersegi(sisiPersegi));
console.log("Keliling Persegi Panjang Dengan Panjang" + panjangPersegiPanjang + "dan" + lebarPersegiPanjang + "Adalah:", kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
// Memanggil fungsi dengan variabel jari-jari
console.log("Keliling Lingkaran Dengan Jari-jari " + jariJariLingkaran + " Adalah:", kelilingLingkaran(jariJariLingkaran));
// Memanggil fungsi kelilingSegitiga dengan memberikan argumen (nilai sisi).
console.log("Keliling Segitiga Dengan Alas" + alasSegitiga + "dan" + tinggiSegitiga + "Adalah:", kelilingSegitiga(sisiSegitiga));