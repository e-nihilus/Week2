import {Triangle} from "./triangle"
import {Point} from "./point"

let point1:Point = new Point(2,3);
let point2:Point = new Point(3,33);
let point3:Point = new Point(22,7);
let triangle:Triangle = new Triangle(point1, point2, point3);

console.log(triangle.calculateLengthSides());