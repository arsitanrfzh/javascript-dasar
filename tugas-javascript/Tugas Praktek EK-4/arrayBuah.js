// Membuat array kosong bernama buah
let buah = [];

// Menambahkan data buah menggunakan push()
buah.push("Apel");
buah.push("Mangga");
buah.push("Jeruk");
buah.push("Semangka");
buah.push("Pisang");
buah.push("Anggur");
buah.push("Nanas");

// Mengurutkan isi array 'buah' berdasar abjad menggunakan metode sort()
buah.sort();

// Menampilkan semua isi array yang sudah diurutkan dengan nomor urut.
// Looping dimulai dari 0 hingga sebanyak jumlah elemen di dalam array.
// for (let i = 0; i < buah.length; i++) {
//   // Mencetak nomor (i + 1 agar mulai dari 1) dan nama buahnya.
//   console.log(`${i + 1}. ${buah[i]}`);
// }

// Menggunakan for each
buah.forEach(function(item,i) {
  console.log(`${i+1}. ${item}`)
})