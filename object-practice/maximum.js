// Get the highest value in the array using reduce

let highNum = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9];
console.log(Math.max(...highNum))
let high = highNum.reduce((max, num) => {
  if (max < num) {
    return num;
  }
  return max;
}, 0);


// console.log(high);


let count = 0;
for (let i = 0; i < highNum.length; i++) {
  if(count < highNum[i]){
    count = highNum[i]
  }
  
}


// console.log(count)

let addtogether = highNum.reduce((count , num)=>{
    // console.log(count)
    return count + num
}, 0)

console.log(addtogether)