// Declaring person Object
let person = {
    name: "Mark",
    age: 26,
    education: "THE MARCY LAB SCHOOL!!",
    // added a key with strings incase I have a two word key name
    "my goals": "Buy a house"
  };

  // Checks if the key exist.
  console.log("name" in person) // true
  console.log("kids" in person) // false

