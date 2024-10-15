class Person{
    //Constructor
    constructor(nombre, peso, altura, yearOfBirth){
        this.name = nombre;
        this.peso = peso;
        this.altura = altura;
        this.genero;
        this.colorPelo;
        this.colorOjos;
        this.tallaPie;
        this.yearOfBirthday =  yearOfBirth;
        this.hobbies = ["Leer", "Nadar", "Musica"];
        
    }
    //Metodos
    calcularIMC(){
        let imc = this.peso / ((this.altura / 100 )* (this.altura / 100));
        return imc;
        }
    
    edad(year){
        let edad = year - this.yearOfBirthday;
        return edad;
    }

    printAll(){
        for (let is in this) {
            console.log(is + "- " + this[is]);
            
        }
    }

    printHobbies(){
        for (let i=0;  i<this.hobbies.length; i++){
            console.log(this.hobbies[i]);
        }
    }

}

module.exports = {Person};
