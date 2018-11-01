const angka_satu = 8;
const angka_dua = 5;
const data_tiga = 5;

//Cara pertama
// function PemjumlahanAngka(data_satu,data_dua){
//     const hasil = data_satu + data_dua;
//     return hasil
// };
// const hasil = PemjumlahanAngka(angka_satu,angka_dua);
// console.log(hasil);

//Cara 2 -ES6
// const penjumlahanAngkalagi = (data_satu,data_dua) =>{
//     const hasil = data_satu + data_dua;
//     return hasil;
// };
// const penjumlahanAngka = penjumlahanAngkalagi(angka_satu,angka_dua);
// console.log(penjumlahanAngka);



const penjumlahan = (data_satu,data_dua) => data_satu + data_dua;
const pengurangan = (data_satu,data_dua) => data_satu - data_dua;
const perkalian = (data_satu,data_dua) => data_satu * data_dua;
const pemjumlahanTotal = (data_satu,data_dua,data_tiga) => data_satu + data_dua + data_tiga;

const hasil_penjumlahan = penjumlahan(angka_satu,angka_dua);
const hasil_perkalian = perkalian(hasil_penjumlahan,angka_dua);
const hasil_pengurangan = pengurangan(hasil_perkalian,angka_dua);

const hasil_Total = pemjumlahanTotal(hasil_penjumlahan,hasil_pengurangan,hasil_perkalian);
console.log(hasil_Total);

// penjumlahanAngkalagi(angka_satu,angka_dua);

