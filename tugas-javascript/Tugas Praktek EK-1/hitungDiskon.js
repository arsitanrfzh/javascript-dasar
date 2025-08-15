// Menyiapkan data awal untuk harga barang dan jumlah uang pembayaran.
let nasiGoreng = 25000;
let mieGoreng = 22000;
let capcay = 32000;
let pembayaran = 100000;

// Menghitung jumlah diskon dalam Rupiah
function hitungDiskon(harga, persenDiskon) {
  const diskon = harga * persenDiskon;
  const hargaSetelahDiskon = harga - diskon;
  return hargaSetelahDiskon;
}

// Menjumlahkan semua harga makanan untuk mendapatkan total harga awal
const hargaMakanan = nasiGoreng + mieGoreng + capcay;
// Menetapkan besar diskon
const diskonPersen = 0.10;
// Memanggil fungsi hitungDiskon untuk mendapatkan harga akhir.
const hargaAkhir = hitungDiskon(hargaMakanan, diskonPersen);
// Menghitung uang kembalian dari pembayaran.
const kembalian = pembayaran - hargaAkhir;

console.log("Harga Nasi Goreng =", nasiGoreng);
console.log("Harga Mie Goreng =", mieGoreng);
console.log("Harga Capcay =", capcay);
console.log("---------------------------------");
console.log("Total Harga =", hargaMakanan);
console.log("Diskon (10%) =", hargaMakanan - hargaAkhir);
console.log("Harga Setelah Diskon =", hargaAkhir);
console.log("Pembayaran =", pembayaran);
console.log("---------------------------------");
console.log("Kembalian dari pembayaran =", kembalian);