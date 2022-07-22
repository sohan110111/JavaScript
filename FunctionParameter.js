function test(parameter_1, parameter_2) {

    return parameter_1 * parameter_2;
}

console.log(test("moffiz", 10)); //NaN
console.log(test(7, 9, 10));

function FindMax (array) {
    let max = -Infinity;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > max) {
            max = element;
        }
    }

    return max;
}
const array = [1, 3, 4, 5, 6, 7, 8, 9];
console.log(FindMax(array));

