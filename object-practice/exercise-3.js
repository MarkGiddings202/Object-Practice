/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the property with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new property: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

// 1
let houseForSale = {
    area: 940,
    value: 32000,
    streetName: "Fifth Street",
    built: 2012,
    owner: {name: "Blake" , age: 29},
    offers: [290000, 295000, 315000, 312000]
}
// 2
console.log(houseForSale)

// 3
delete houseForSale["built"]

// 4
houseForSale.owner.age = 30

// 5
let maxMethod= Math.max(...houseForSale.offers)
console.log(maxMethod)

let maxOffer = houseForSale.offers.reduce((result, num)=>{
    /*
    reduce, if you don't take the time to understand
    what it does, it would easily fly over many beginner programers heads
    after every iteration it's only meant to send back ONE value.
    with that being said use the counter(result) and the num (all the elements in the array)
    to determine the highest number in the array
    if the result is less than the num we send the number back
    if the result is greater than the number we return the result back to the reduce counter ( 0 )
    this is how you get the maximum value of a number in an array.
  */
    if(result < num){
     
        return num 
    }
    return result
}, 0);

console.log(maxOffer)

// 6
houseForSale["sale price"] = maxOffer



// 7
console.log(houseForSale)