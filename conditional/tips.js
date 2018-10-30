const peopleName = "ABC";

//ternary operator
const greetings =
  peopleName === "ABC"
    ? "Yes, my Name is ABC"
    : `No, I don't even know who I am`;

console.log(greetings);

//Conditional statement
const phone = "081234567890";
const answerMyNumber =
  phone === "081234567890" || phone === "081234567891" || phone === "081234567892"
    ? "Please choose one between the two"
    : "My Number is not one of them!";
    console.log(answerMyNumber);