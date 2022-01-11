var fruits = ["banana", "apple", "pineapble", "mango", "alive"];
//document.write(fruits);

console.log(fruits);
var text = "<ul>";
for (let index = 0; index < fruits.length; index++) {
    //console.log(fruits[index]);
    text += "<li>" + fruits[index] + "</li>"
}
text += "</ul>";

document.write(text);
console.log(text);


// arrow funciton
fruits.forEach(element => {
    console.log(element);
});
//anonymous funciton
fruits.forEach(function(element, index, Array) {
    console.log(index, element, Array);
})
fruits.forEach(myFunction);
function myFunction(params) {
    console.log(params);
}
