import { add } from "./buclesFor.js";
import { isEven } from "./condicionales.js";

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca·", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"];

let array1Sum: number = add(array1);
let array2Sum: number = add(array2);
let array3Sum: number = add(array3);

isEven(array1Sum);
isEven(array2Sum);
isEven(array3Sum);
