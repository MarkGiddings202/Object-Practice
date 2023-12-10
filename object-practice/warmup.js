/*
    1. Create an object called "mexico" with the following properties:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/
// 1.
let mexico = {
    id: 24,
    name: "Mexico",
    capital: "Mexico City",
    neighbours: ["USA", "Guatemala", "Belize"]
}
// 2.
console.log(mexico.name)
// 3.
console.log(mexico.id = 25)
// 4.
mexico.neighbours.push("Honduras")
console.log(mexico.neighbours)
// 5.
console.log(mexico.name)