import {Point} from "./point"


let punto:Point = new Point(3,4);
let punto2:Point = new Point(5,6);

console.log(punto.toString());
console.log(punto.distanceToOrigin());
console.log(punto.calculateDistance(punto2))



punto.X = 5;
punto.Y = 10;
console.log(punto.X);
console.log(punto.Y)