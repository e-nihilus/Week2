import {Point} from "./point"


let punto:Point = new Point(3,4);
let punto2:Point = new Point(5,6);

console.log(punto.toString());
console.log("La distancia del punto al origen es " + punto.distanceToOrigin());
console.log("La distancia entre " + punto + " y " + punto2 + " es " + punto.calculateDistance(punto2));
console.log("El punto" + punto + "esta en el cuandrante " + punto.calculateQuadrant());

punto.X = 5;
punto.Y = 10;
console.log(punto.X);
console.log(punto.Y)