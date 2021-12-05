// Module Kullanımı
const Square = require("./moduleSquare.js");
const mySquare = new Square(4);

console.log(`Area is ${mySquare.area()}`);

// Circle Hmw-3 Example
const { circleArea, circleCircumference } = require("./circle-hmw3.js");

circleArea(5);
circleCircumference(5);
