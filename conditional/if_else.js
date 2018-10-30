const peopleName = "ABC";
const age = 25;
const profile = {
  name: "DEF",
  phone:"123456789"
};

//>,<,>=,<=,!==,===,==
//&&,||

if (age === 17){
    console.log('I am 17 years old');
}
else if (age > 17 && age < 25){
    console.log('Guess my age');
}
else if (age === 17 || age === '17'){
    console.log('....');
}
else{
    console.log('ABCDEFGH');
}

