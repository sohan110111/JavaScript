/*function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
var[firstName, secondName] = NamesList();

console.log(firstName);//"alpha"
console.log(secondName);//"beta"


var marks = {x: 21, y: -34, z: 47 };
 
const { x, y, z } = marks; // x = 21, y = -34, z = 47
 
 
console.log(x);
console.log(y);
console.log(z);*/

const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 },
    section1_2: { alpha: 0, beta: 0 }
};
const { section1 : { alpha: alpha1, beta: beta1 }, section2 : {alpha: alpha2, beta: beta2}, section1_2: {alpha: alpha3, beta: beta3}} = marks;
console.log(alpha1, beta1, alpha2, beta2, alpha3, beta3); // 15, 16, -31, 19, 0, 0