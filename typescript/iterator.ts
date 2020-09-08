// for..in returns a list of keys on the object being iterated, 
// whereas for..of returns a list of values of the numeric properties of the object being iterated.
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // "4", "5", "6"
}