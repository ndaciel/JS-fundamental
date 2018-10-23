// Coba Coba Git
const products = [
    {
      name: "Uncharted 4",
      price: "Rp 550.000",
      transaction :"24",
      rating:9
    },
    {
        name: "GTA V",
        price: "Rp 880.000",
       transaction :"24",
        rating:9
    },
    {
        name: "FIFA 2019",
        price: "Rp 850.000",
        transaction :"5",
        rating:7
    }
  ];

  console.log('==================== Map ====================');
  //Map
  products.map((dataObj, id) =>{
        console.log(dataObj.name , dataObj.price, dataObj.rating);
  });

  console.log('==================== For ====================');

  //For
  for(let a=0; a<products.length; a++){
    console.log(products[a].name, products[a].price, products[a].rating)
  };

  console.log('====================== For Each ==================');
  products.forEach(element => {
    console.log(element.name, element.price ,element.rating);
  });