const {Person} = require("./person");

let persona1 = new Person("Paco", 83, 180, 1999);

let year = 2024

// console.log(persona1.calcularIMC());
// console.log("la edad de " + persona1.name + " en el año " + year + " es " + persona1.edad(year));
persona1.printAll();
persona1.printHobbies();