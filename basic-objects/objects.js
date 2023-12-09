// create an object
let person = {
  name: "Mark",
  age: 25,
  kids: 0,
  education: "Clara Barton h.s",
};
// access an object
console.log(person.name);
console.log(person.age);
console.log(person.kids);
console.log(person.education);

// update the value of an object
person.age = 26;
person.education = "THE MARCY LAB SCHOOL";
person["kids"] = 1;
// updated values
console.log("--- Updated values ---");
console.log(person.age);
console.log(person.education);
console.log(person.kids, "SOON LOL");
