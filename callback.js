function display(something) {
    console.log(something);
}

function sum(num1, num2) {
    return display(num1 + num2);
}

sum(2, 3);

// call back example function

function calculate(num1, num2, callback) {
    let result = num1 + num2;
    return callback(result); // call back
}

calculate(1, 3, function (res) { console.log(res)});