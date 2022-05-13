let numbers = [1, 2, 3, 4, 5]
let [num1, num2,num3, ...z] = numbers; //array destructuring
console.log(num1, num2, num3, z);

// swap
let a = 20, b = 30;
[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`);

//object destructuring

const studentIfo = {
    id : 456789,
    name : 'Abir',
    phone : '1234567890'
}

const {id, name} = studentIfo;
let test = id + ' : ' + name;
console.log(test);
console.log(typeof test); // string