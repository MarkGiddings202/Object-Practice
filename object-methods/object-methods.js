// Declaring person Object
let person = {
  name: "Mark",
  age: 26,
  education: "THE MARCY LAB SCHOOL!!",
  // added a key with strings incase I have a two word key name
  "my goals": "Buy a house",
};

// How do we print out all the values?
console.log(Object.entries(person));

// How do we log out all the keys?
console.log(Object.keys(person));

//How do we print out all the values?
console.log(Object.values(person));
