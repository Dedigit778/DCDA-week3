// Mendeklarasikan variabel dengan tipe data yang diminta
const nama = "Dedi"; // String
const usia = 16; // Number
const SudahBelajarJS = true; // Boolean
//Mencetak hasil 
console.log(nama);
console.log(usia);
console.log(SudahBelajarJS);
 

// Mendeklarasikan dua variabel angka
let angka1 = 10;
let angka2 = 5;
// Melakukan operasi aritmatika
console.log("Penjumlahan: ", angka1 + angka2);
console.log("Pengurangan: ", angka1 - angka2);
console.log("Perkalian: ", angka1 * angka2);
console.log("Pembagian: ", angka1 / angka2);




// Program untuk menilai hasil ujian
let nilai =100;
if (nilai >= 80) {
    console.log("Lulus dengan Baik");
} else if (nilai >= 60) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}




// Menggunakan perulangan for untuk mencetak angka 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}





// Fungsi untuk menyapa pengguna
function sapaPengguna(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript!`;
}
// Memanggil fungsi dan mencetak hasilnya
console.log(sapaPengguna("Dedi"));

