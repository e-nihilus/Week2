import { Library } from "./library"
import {Book} from "./book";

let book1:Book = new Book("El quijote", 400, "9788493806125",  "Miguel de Cervantes", "Novela");
let book2:Book = new Book("Criptoria", 300, "978-9916-4-2572-5",  "Alfre Mancera", "Prometea");

let varLibro = [book1, book2];

let librery1 = new Library(varLibro, "calle mi casa", "Pepe");

console.log(librery1.toString());

librery1.Adress =  "calle tu casa";
console.log(librery1.Adress);
librery1.Manager = "Juan";
console.log(librery1.Manager);

console.log(librery1.getNumberOfBooks());

console.log(librery1.findByAuthor("Alfre Mancera"));