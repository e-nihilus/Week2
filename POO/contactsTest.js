const {Contacts} = require("./contacts");
const {Person} = require("./person");

let cont = new Contacts();
let persona1 = new Person("Paco", 83, 180, 1999);
let persona2 = new Person("Juan", 77, 170, 2000);
cont.contactos.push(persona1);
cont.contactos.push(persona2);

cont.printPersonas()