/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create an object called "store" with the following properties:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store object
       to be 1.75..

    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99

    9. Print out both "store" and "candy"
*/

// 1.
const banana = { name: "Banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name: "candy", quantity: 1, price: 1.45 };

// 2.
const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: ["banana", "apple", "candy"],
};

console.log(store.products[0])
// 3.
console.log(store);
// 4.
console.log(Object.values(store.products));
// 5.
console.log(store.locationCountry);
// 6.
console.log(store.products[0]);
store.products[0] = banana.price;
console.log(store.products[0]);
// 7.
console.log(store, banana);
// 8.
candy.price = 4.99;
// 9.
console.log(store, candy);
