const profile = {
  name: "DEF",
  phone: "123456789"
};

switch (profile.phone) {
  case "08123456789":
    console.log("Operator yang anda gunakan adalah Telkomsel Simpati");
  case "08134567890":
    console.log("Operator yang anda gunakan adalah Telkomsel Hallo");
  case "08578912345":
    console.log("Operator yang anda gunakan adalah Indosat IM3");
  default:
    console.log("Silahkan Masukkan No Handphone anda");
}
