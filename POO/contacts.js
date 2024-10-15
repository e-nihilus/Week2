const {Person} = require("./person");

class Contacts{
    constructor(){
        this.contactos = [];
    }


    printPersonas(){
        for (let person of  this.contactos){
            person.printAll();
        }
    }
}

module.exports = {Contacts};