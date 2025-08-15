// Data sepatu (array objek)
const daftarSepatu = [
  { nama: "New Balance NB530", harga: 390000 },
  { nama: "Nike Vomero 5", harga: 350000 },
  { nama: "Adidas Samba", harga: 180000 },
  { nama: "Onitsuka Tiger Mexico", harga: 420000 },
];

// Fungsi untuk menampilkan daftar sepatu dan total harga
function tampilkanDaftarDanTotal(daftar) {
  let totalHarga = 0;
  console.log("===== Rincian Belanja Sepatu =====");
  daftar.forEach((sepatu) => {
    console.log(`- ${sepatu.nama}: Rp ${sepatu.harga.toLocaleString()}`);
    totalHarga += sepatu.harga;
  });
  console.log("");
  console.log(`Total Belanja: Rp ${totalHarga.toLocaleString()}`);
  return totalHarga;
}

// Fungsi untuk menentukan persentase diskon berdasarkan total belanja.
function tentukanDiskon(totalHarga) {
  let persenDiskon = 0;
  // Cek kondisi dari yang terbesar hingga terkecil.
  if (totalHarga >= 800000) {
    persenDiskon = 0.15; // 15%
  } else if (totalHarga >= 500000) {
    persenDiskon = 0.10; // 10%
  } else if (totalHarga >= 250000) {
    persenDiskon = 0.05; // 5%
  } else {
    persenDiskon = 0; // 0%
  }
  return persenDiskon; // Mengembalikan persentase diskonnya.
}

// Fungsi untuk menghitung diskon dan total setelah diskon
function hitungDiskonDanTotalSetelahDiskon(totalHarga, persenDiskon) {
  const jumlahDiskon = totalHarga * persenDiskon;
  const totalSetelahDiskon = totalHarga - jumlahDiskon;
  return {
    jumlahDiskon,
    totalSetelahDiskon,
  };
}

// Fungsi untuk menghitung kembalian
function hitungKembalian(totalBelanja, uangBayar) {
  if (uangBayar < totalBelanja) {
    return "Uang yang dibayarkan kurang";
  }
  return uangBayar - totalBelanja;
}

// Main program
const totalHargaAwal = tampilkanDaftarDanTotal(daftarSepatu);
const diskon = tentukanDiskon(totalHargaAwal);
const hasilDiskon = hitungDiskonDanTotalSetelahDiskon(
  totalHargaAwal,
  diskon
);
const totalSetelahDiskon = hasilDiskon.totalSetelahDiskon;

console.log(`Diskon: ${(diskon * 100).toFixed(0)}%`);
console.log(`Total Harga Setelah Diskon: Rp ${totalSetelahDiskon.toLocaleString()}`);

const uangBayar = 1200000;
const kembalian = hitungKembalian(totalSetelahDiskon, uangBayar);

console.log(`Uang yang dibayarkan: Rp ${uangBayar.toLocaleString()}`);
console.log(`Kembalian: Rp ${typeof kembalian === 'string' ? kembalian : kembalian.toLocaleString()}`);