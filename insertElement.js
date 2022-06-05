const array = [1, 2, 3, 4, 5, 6, 7]
let newArray = [];
const insertValue = 10;
const position = 5;

for (let index = 0; index < array.length; index++) {
    if (index == position - 1) {
        newArray.push(insertValue);
    }
    newArray.push(array[index]);
}
console.log(newArray);
// for (let index = 0; index < newrray.length; index++) {
//     const element = array[index];
    
// }