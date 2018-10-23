// const peopleName = "Yogie";
// const peopleAge = 17;

// console.log("Hello" + peopleName);

// console.log(`Hello ${peopleName}`);

// const hero = {
//   heroName: "Novi",
//   heroAlias: "love",
//   heroColor: "Yellow",
//   heroGender: "Male"
// };

// console.log(`${hero.heroName} ${hero.heroGender}`);

const shops = {
  shop_id: 378494,
  shop_url: "test",
  shop_name: "Telkomsel",
  logo_url: "test",
  is_new: 0
};

console.log(`${shops.shop_name}`);

const shopsList = [
  {
    shop_id: 378494,
    shop_url: "test",
    shop_name: "Telkomsel",
    logo_url: "test",
    is_new: 0
  },
  {
    shop_id: 378495,
    shop_url: "test",
    shop_name: "XL",
    logo_url: "test",
    is_new: 0
  }
];

shopsList.forEach(function(lParam) {
  console.log(`${lParam.shop_name}`);
});
