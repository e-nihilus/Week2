import { Vector } from "./vector"

let vector1:Vector = new Vector(3,10);
let vector2:Vector = new Vector(3,20);

let vectorSuma:Vector = vector1.add(vector2);
let vectorResta: Vector = vector1.subs(vector2);
let vectorProduct: Vector = vector1.mult(vector2);
let vectorProNum: Vector =  vector1.multNumber(3);


vectorSuma.print()
vectorResta.print()
vectorProduct.print()
vectorProNum.print()