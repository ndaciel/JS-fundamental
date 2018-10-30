const dataProducts = [
  {
    name: "Red Dead Redemption 2",
    price: "850000",
    category: "RPG",
    rating: "10",
    location: "Jakarta"
  },
  {
    name: "Ghost of Tsushima",
    price: "750000",
    category: "Action",
    rating: "9",
    location: "Bandung"
  },
  {
    name: "Spiderman",
    price: "680000",
    category: "Humor",
    rating: "8",
    location: "Tangerang"
  },
  {
    name: "Shadow of The Tomb Raider",
    price: "720000",
    category: "Adventure",
    rating: "7",
    location: "Batam"
  }
];

//Result
//===============================================

// Game name : Shadow of The Tomb Raider
// Price : 720000
// Price : Adventure
// Price : 720000
// Rating : 7
// Ongkos Kirim : 35000

//Ongkir dari jakarta =  10000
//Ongkir dari Tangerang =  15000
//Ongkir dari Bandung =  20000
//Ongkir dari Batam =  35000

dataProducts.forEach(element => {
  if (element.name == "Shadow of The Tomb Raider") {
    let ongkir = "";
    switch (element.location) {
      case "jakarta":
        ongkir = "10000";
        break;
      case "Tangerang":
        ongkir = "15000";
        break;
      case "Bandung":
        ongkir = "20000";
        break;
      default:
        ongkir = "35000";
    }
    console.log(
      `Game name : ${element.name} ` +
        "\n" +
        `Price : ${element.price}` +
        "\n" +
        `Price : ${element.category}` +
        "\n" +
        `Price : ${element.price}` +
        "\n" +
        `Rating : ${element.rating}` +
        "\n" +
        `Ongkos Kirim : ${ongkir}`
    );
  }
});
