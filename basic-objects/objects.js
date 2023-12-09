let person = {
  name: "Mark",
  age: 25,
  kids: 0,
  education: "Clara Barton h.s",
  // added a key with strings incase I have a two word key name
  "my goals": "Be a phenomal teacher!"
};
// access an object
console.log(person.name);
console.log(person.age);
console.log(person.kids);
console.log(person.education);
// using the array string notation to log person object
console.log(person["my goals"])

// update the value of an object
person.age = 26;
person.education = "THE MARCY LAB SCHOOL";
person["kids"] = 1;
// using the array string notation to update person object
person["my goals"] = "Buy a house!"

// updated values
console.log("--- Updated values ---");
console.log(person.age);
console.log(person.education);
console.log(person.kids, "SOON LOL");
console.log(person["my goals"])

// deleting properties from an object
delete person.kids
// prints out properties of the person object and removes kids
console.log(person)

