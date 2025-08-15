const fs = require("fs");

let film = [
    {
        judulFilm: "Agak Laen",
        tahunRilis: "2024",
        genreFilm: ["Horror", "Komedi"],
    },
    {
        judulFilm: "Habibie & Ainun",
        tahunRilis: "2012",
        genreFilm: ["Drama", "Romantis"],
    },
    {
        judulFilm: "Dilan 1990",
        tahunRilis: "2018",
        genreFilm: ["Romantis"],
    }
];

// Menyimpan data ke file daftarFilm.json
fs.writeFileSync("daftarFilm.json", JSON.stringify(film, null, 2));

console.log("Daftar Film:");

// Menampilkan setiap film, dimulai dari nomor 1
film.forEach((f, index) => {
  // 'index + 1' memastikan penomoran dimulai dari 1
  console.log(`${index + 1}. ${f.judulFilm} (${f.tahunRilis}) [${f.genreFilm.join(", ")}]`);
});