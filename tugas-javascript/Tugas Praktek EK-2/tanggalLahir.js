// --- Inisialisasi Variabel ---
// Mendeklarasikan variabel untuk menyimpan komponen tanggal lahir.
let tanggal = 12;
let bulan = 6; // Bulan direpresentasikan dalam bentuk angka (1-12)
let tahun = 1999;

// Menyiapkan variabel kosong yang nanti akan diisi dengan nama bulan (misal: "Januari", "Februari", dst.).
let namaBulan;

// --- Logika Konversi Bulan ---
// Menggunakan struktur switch-case untuk melakukan pengecekan terhadap nilai variabel 'bulan'.
// Struktur ini lebih rapi daripada menggunakan if-else if yang panjang untuk kondisi yang spesifik seperti ini.
switch (bulan) {
  // Jika nilai 'bulan' adalah 1, maka...
  case 1:
    // ...variabel 'namaBulan' diisi dengan string "Januari".
    namaBulan = "Januari";
    // 'break' menghentikan eksekusi switch. Tanpa ini, kode akan lanjut ke case berikutnya.
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  // Karena nilai 'bulan' adalah 6, blok inilah yang akan dieksekusi.
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  // Jika nilai 'bulan' tidak cocok dengan case manapun (misal: 0 atau 13), blok default ini akan dijalankan.
  default:
    namaBulan = "Bulan tidak valid";
}

// Menggabungkan semua variabel (tanggal, namaBulan, dan tahun) menjadi satu kalimat/string.
// Tanda backtick (`) memungkinkan kita menyisipkan variabel langsung ke dalam string menggunakan ${...}.
let tanggalLahir = `${tanggal} ${namaBulan} ${tahun}`;

// Mencetak isi dari variabel 'tanggalLahir' ke konsol.
console.log(tanggalLahir); // Output yang akan muncul: "12 Juni 1999"