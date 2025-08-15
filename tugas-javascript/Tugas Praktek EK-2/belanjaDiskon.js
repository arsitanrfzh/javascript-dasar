// Kumpulan data barang yang akan dibeli, disimpan dalam array.
const daftarElektronik = [
  { nama: "Headset", harga: 225000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 350000 },
];

// Fungsi untuk menampilkan rincian belanja dan menghitung total harga awal.
function tampilkanDaftarDanTotal(daftar) {
  let totalHarga = 0;
  console.log("===== Rincian Pembelian =====");
  // Looping untuk setiap barang, tampilkan, dan tambahkan harganya ke total.
  daftar.forEach((elektronik) => {
    console.log(`- ${elektronik.nama}: Rp ${elektronik.harga.toLocaleString()}`);
    totalHarga += elektronik.harga;
  });
  console.log(`Total Harga: Rp ${totalHarga.toLocaleString()}`);
  return totalHarga; // Mengembalikan total harga untuk perhitungan selanjutnya.
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

// Fungsi untuk menghitung nominal diskon dan total akhir.
function hitungDiskonDanTotalSetelahDiskon(totalHarga, persenDiskon) {
  const jumlahDiskon = totalHarga * persenDiskon;
  const totalSetelahDiskon = totalHarga - jumlahDiskon;
  // Mengembalikan hasil dalam bentuk objek agar mudah diakses atau dipanggil.
  return {
    jumlahDiskon,
    totalSetelahDiskon,
  };
}

// Fungsi untuk menghitung kembalian, dengan validasi jika uang kurang.
function hitungKembalian(totalBelanja, uangBayar) {
  if (uangBayar < totalBelanja) {
    return "Uang yang dibayarkan kurang";
  }
  return uangBayar - totalBelanja;
}

// ===================================
// ===== ALUR UTAMA PROGRAM (MAIN) =====
// ===================================

// 1. Tampilkan rincian & hitung total harga awal.
const totalHargaAwal = tampilkanDaftarDanTotal(daftarElektronik);

// 2. Tentukan diskon yang didapat dari total harga awal.
const diskon = tentukanDiskon(totalHargaAwal);

// 3. Hitung nominal diskon dan berapa total yang harus dibayar setelah diskon.
const hasilDiskon = hitungDiskonDanTotalSetelahDiskon(totalHargaAwal, diskon);
const totalSetelahDiskon = hasilDiskon.totalSetelahDiskon;

// 4. Tampilkan hasil perhitungan diskon ke pengguna.
console.log(`Diskon: ${(diskon * 100).toFixed(0)}%`);
console.log(`Total Harga Setelah Diskon: Rp ${totalSetelahDiskon.toLocaleString()}`);

// 5. Simulasi pembayaran dan hitung kembaliannya.
const uangBayar = 800000;
const kembalian = hitungKembalian(totalSetelahDiskon, uangBayar);

// 6. Tampilkan detail pembayaran akhir.
console.log(`Uang yang dibayarkan: Rp ${uangBayar.toLocaleString()}`);
console.log(`Kembalian: Rp ${typeof kembalian === 'string' ? kembalian : kembalian.toLocaleString()}`);