const product = [
  {
    name: "nabati choco",
    price: 20000,
    category: "Food",
    location: "Bandung"
  },
  {
    name: "Adapter",
    price: 850000,
    category: "Electronic",
    location: "Jakarta"
  },
  {
    name: "Batik Shirt",
    price: 399000,
    category: "Fashion",
    location: "Bandung"
  },
  {
    name: "BoardMarker SnowMan",
    price: 25000,
    category: "Office",
    location: "Tangerang"
  }
];

//Todo
//1. Bikin function untuk hitung diskon (Category Food discount 5%)
//2. Bikin function untuk hitung ongkir (Tangerang 15000, Jakarta 10000, Bandung 20000)
//3. Bikin function untuk hitung Admin (semua 2000)
//4. Bikin function untuk hitung total harga yg harus di bayar user
//5. Bikin Looping
//6. Panggil semua function

//1
const FuncHitungDiskon = (lCategory, lPrice) => {
  let lHasil = 0;
  if (lCategory == "Food") {
    lHasil = lPrice * 0.5;
  }
  return lHasil;
};

//2
const FuncHitungOngkir = lLocation => {
  let lHasil = 0;
  if (lLocation == "Tangerang") lHasil = 15000;
  else if (lLocation == "Bandung") lHasil = 20000;
  else lHasil = 10000;

  return lHasil;
};

//3
const FuncHitungAdmin = () => 2000;

//4
const FuncHitungTotal = (lPrice, lDiskon, lHitungOngkir, lHitungAdmin) => {
    const lHasil = lPrice - lDiskon + lHitungOngkir + lHitungAdmin;
    return lHasil;
};

product.forEach(lParam => {
    const lDisc = FuncHitungDiskon(lParam.category,lParam.price);
    const lOngkir = FuncHitungOngkir(lParam.location);
    const lAdmin  = FuncHitungAdmin();
    const lTotal = FuncHitungTotal(lParam.price,lDisc,lOngkir,lAdmin);
    console.log(`nama product : ${lParam.name} \nTotal Harga yang harus dibayar Rp.${lTotal}`)
});

