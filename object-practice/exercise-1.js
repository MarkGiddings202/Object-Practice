/*

    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new property: colour -> "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/

// 1.
let myPet = {
  name: "Sude",
  type: "Dog",
  breed: "Poodle",
  age: 7,
  friend: ["Bit", "Byte", "Data"],
};
// 2.
console.log(myPet);
// 3.
myPet.color = "Black";
console.log(myPet);
// 4.
myPet.breed = "Beagle";
// 5.
delete myPet.friend.pop();
// 6.
console.log(myPet);
// 7.
myPet.friend.push("Chips");
// 8.
console.log(myPet);
