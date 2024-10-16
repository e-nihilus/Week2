import {Book} from "./book";

let book1:Book = new Book("El quijote", 400, "9788493806125",  "Miguel de Cervantes", "Novela");


console.log(book1.toString());

book1.Title= "Criptoria";
console.log(book1.Title);
book1.Pages= 300;
console.log(book1.Pages);
book1.Isbn= "978-9916-4-2572-5";
console.log(book1.Isbn);
book1.Author= "Alfre Mancera";
console.log(book1.Author);
book1.Editorial= "Prometea";
console.log(book1.Editorial);


