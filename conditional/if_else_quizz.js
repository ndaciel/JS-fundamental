const rapor = {
  math: 80,
  english: 85,
  physics: 99,
  bahasa: 55,
  computer: 100,
  accounting: 67,
  chemistry: 35
};

const hasil_akhir =
  (rapor.math +
    rapor.english +
    rapor.physics +
    rapor.bahasa +
    rapor.computer +
    rapor.accounting +
    rapor.chemistry) /
  7;

//console.log(Math.round(hasil_akhir));

//Req
//jika hasil akhir pembulatan >= 95 maka tampilkan "Selamat! you are the greatest"
//jika hasil akhir pembulatan >= 80 dan <= 95 maka tampilkan "congratulation! kamu hebat"
//jika hasil akhir pembulatan >= 60 dan <= 80 maka tampilkan "coba lagi!"
//jika hasil akhir pembulatan >= 40 dan <= 60 maka tampilkan "kurangi main game"
//selain dari semua aturan diatas  --------> Tolong panggil orang tuamu!

const hasil_akhir_pembulatan = Math.round(hasil_akhir);
if (hasil_akhir_pembulatan >= 95) console.log("Selamat! you are the greatest");
else if (hasil_akhir_pembulatan >= 80 && hasil_akhir_pembulatan <= 95)
  console.log("congratulation! kamu hebat");
else if (hasil_akhir_pembulatan >= 60 && hasil_akhir_pembulatan <= 80)
  console.log("coba lagi!");
else if (hasil_akhir_pembulatan >= 40 && hasil_akhir_pembulatan <= 60)
  console.log("kurangi main game");
else console.log("Tolong panggil orang tuamu!");
