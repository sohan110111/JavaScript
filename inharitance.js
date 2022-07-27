class parentClass {
    constructor(brand) {
        this.brand = brand;
    }
}

class childClass extends parentClass {
    method() {
        return `${this.brand} is very expensive.`
    }
}

const object = new parentClass("Tesla");
const BrandName = new childClass("Ford")

console.log(BrandName.method());
console.log(object.brand);
console.log(BrandName.brand);