const product = {
  name: "sepatu Adidas Yessy",
  price: 1560000,
  category: "Fashion",
  size: 42,
  color: "Black"
};

const hitungDiskon = hargabarang => {
  //Diskon 20% all Item
  const hasil = hargabarang * 0.2;
  return hasil;
};

const hitungOngkir = lokasiPenjual => {
  if (lokasiPenjual === "Bandung") return 25000;
  else return 10000;
};

const hitungBiayaAdmin = () => 2500;

const hitungHargaTotal = (amount, discount, shippingfee, adminfee) => {
  const hasil = amount - discount + shippingfee + adminfee;
  return hasil;
};

const hasilPerhitunganDiskon = hitungDiskon(product.price);
const hasilPerhitunganOngkir = hitungOngkir(product.lokasiPenjual);
const hasilPerhitunganBiayaAdmin = hitungBiayaAdmin();
const hasilTotal = hitungHargaTotal(
  product.price,
  hasilPerhitunganDiskon,
  hasilPerhitunganOngkir,
  hasilPerhitunganBiayaAdmin
);
console.log(`Harga nya : Rp.${hasilTotal}`);
