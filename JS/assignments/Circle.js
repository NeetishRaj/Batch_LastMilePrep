const Shape = require('./Shape.js')

class Circle extends Shape {
    constructor() {
        super();
    }

    calculateArea() {
        console.log("overridden calculateArea")
    }
}

const c1 = new Circle();
c1.calculateArea();

module.exports = Circle;