const number = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("______");
}

number.forEach(myFunction);

// map
function myFunction(value) {
    return value*2;
}

const newNumber = number.map(myFunction);
console.log(newNumber);