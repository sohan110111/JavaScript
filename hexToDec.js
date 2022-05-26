
var String = "3DEF";
var length = String.length;
var decimalNumber = 0;
var hexBase = 16;
for (let index = 0; index < String.length; index++) {
    if (String[index] === "A") {
        let A = 10;
        decimalNumber = decimalNumber+A*Math.pow(hexBase, --length);
    } else if (String[index] === "B") {
        let B = 11;
        decimalNumber = decimalNumber+B*Math.pow(hexBase, --length);
    } else if (String[index] === "C") {
        let C = 12;
        decimalNumber = decimalNumber+C*Math.pow(hexBase, --length);
    } else if (String[index] === "D") {
        let D = 13;
        decimalNumber = decimalNumber+D*Math.pow(hexBase, --length);
    } else if (String[index] === "E") {
        let E = 14;
        decimalNumber = decimalNumber+E*Math.pow(hexBase, --length);
    } else if (String[index] === "F") {
        let F = 15;
        decimalNumber = decimalNumber+F*Math.pow(hexBase, --length);
    } else {
        decimalNumber = decimalNumber+String[index]*Math.pow(hexBase, --length);
    }
}
console.log(`HexaDecimal Number: ${String}`);
console.log(`Decimal Number: ${decimalNumber}`);