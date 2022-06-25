const person = {
    name: "John",
    age: 34,
    Funtion : function() {
        return `${this.name} Doe`
    }
}

console.log(Object.values(person))

const personArray = Object.values(person)
personArray.forEach(element => {
    console.log(element)
});

for (x in personArray) {
    //console.log(personArray[x])
    console.log(x)
}
for (x of personArray) {
    //console.log(personArray[x])
    console.log(x)
}