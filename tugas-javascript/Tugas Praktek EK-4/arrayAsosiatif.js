let tinggiBadan = {
  "Rose": 178,
  "Magnolia": 153,
  "Daisy": 165,
  "Jasmine": 161,
  "Violet": 159
};

// Menampilkan data sebelum diurutkan
console.log("Data sebelum diurutkan:");
for (let nama in tinggiBadan) {
  console.log(nama + ": " + tinggiBadan[nama] + " cm");
}

// Mengurutkan berdasarkan nama (alfabet)
let namaSorted = Object.keys(tinggiBadan).sort();

// Menampilkan data setelah diurutkan
console.log("\nData setelah diurutkan:");
for (let i = 0; i < namaSorted.length; i++) {
  let nama = namaSorted[i];
  console.log(nama + ": " + tinggiBadan[nama] + " cm");
}

console.log("Daftar tinggi badan:", tinggiBadan);