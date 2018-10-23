const subject = "Mathematics"; // ini adalah contoh variable dengan tipe data string
const point = 8; // contoh tipe data integer
const isGood = true; // contoh tipe data boolean

//Practice 2
const minions = ["kevin", "Bob", "Dave"];
console.log(`${minions[0]} ${minions[2]}`);

const curriculum = [
  {
    subject: "English",
    point: 3
  },
  {
    subject: "Bahasa",
    point: 9
  },
  {
    subject: "Computer Science",
    point: 10
  }
]; // contoh tipe data array of object

const subjectToStudy = {
  subjectName: "Physics",
  point: 7,
  chapters: {
    number: 1,
    name: "Introduction",
    point: {
      number: "1A",
      name: "Get to Know about Quantum Physics"
    }
  }
}; // contoh tipe data object

//Practice 1
console.log(
  `Topic number ${subjectToStudy.chapters.point.number} explains about ${
    subjectToStudy.chapters.point.name
  }`
);



const products = [
    {
      subject: "English",
      point: 3
    },
    {
      subject: "Bahasa",
      point: 9
    },
    {
      subject: "Computer Science",
      point: 10
    }
  ];