import { add } from "./buclesFor";
import { isEven } from "./condicionales";

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca·", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"];

let array1Sum: number = add(array1);
let array2Sum: number = add(array2);
let array3Sum: number = add(array3);

console.log("La suma de los caracteres de "+ array1 + " es: " + isEven(array1Sum));
console.log("La suma de los caracteres de "+ array2 + " es: " + isEven(array2Sum));
console.log("La suma de los caracteres de "+ array3 + " es: " + isEven(array3Sum));

