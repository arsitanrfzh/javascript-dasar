function bagiAngka(a,b) {
   try {
    if (b == 0) {
        throw new Error("Tidak bisa membagi dengan nol");
    }else {
        let hasil = a / b;
        console.log("Hasil pembagian adalah : " + hasil);
    }
} catch (error) {
    console.error("Error :" + error.message);
}
}
let angka1 = 10;
let angka2 = 0;

try {
    bagiAngka(angka1, angka2)
} catch(error) {
    console.log("Terjadi kesalahan lain : " + error.message)
}

console.log("Program selesai");


