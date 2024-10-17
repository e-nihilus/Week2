//Declaracion de funciones
function zodiac(day: number, month: number): string {
    let sign: string = "";
    if (month === 1) {
        if (day>=20){
            sign = "Acuario"
        }
        else{
            sign ="Capricornio"
        }
    }
    else if (month === 2) {
        if (day>=20){
            sign = "Piscis"
        }
        else{
            sign ="Acuario"
        }
    }
    else if (month === 3) {
        if (day>=20){
            sign = "Aries"
        }
        else{
            sign ="Piscis"
        }
    }
    else if (month === 4) {
        if (day>=20){
            sign = "Tauro"
        }
        else{
            sign ="Aries"
        }
    }
    else if (month === 5) {
        if (day>=20){
            sign = "Geminis"
        }
        else{
            sign ="Tauro"
        }
    }
    else if (month === 6) {
        if (day>=20){
            sign = "Cancer"
        }
        else{
            sign ="Geminis"
        }
    }
    else if (month === 7) {
        if (day>=20){
            sign = "Leo"
        }
        else{
            sign ="Cancer"
        }
    }
    else if (month === 8) {
        if (day>=20){
            sign = "Virgo"
        }
        else{
            sign ="Leo"
        }
    }
    else if (month === 9) {
        if (day>=20){
            sign = "Libra"
        }
        else{
            sign ="Virgo"
        }
    }
    else if (month === 10) {
        if (day>=20){
            sign = "Escorpio"
        }
        else{
            sign ="Libra"
        }
    }
    else if (month === 11) {
        if (day>=20){
            sign = "Sagitario"
        }
        else{
            sign ="Escorpio"
        }
    }
    else if (month === 12) {
        if (day>=20){
            sign = "Capricornio"
        }
        else{
            sign ="Sagitario"
        }
    }
    else {
        sign = "Datos no validos";
    }
    return sign;
}

function  continent(country: string){
    let continentes = {
        "Africa": ["Egipto", "Sudáfrica", "Tanzania","Marruecos", "Nigeria"],
        "Asia": ["China", "India", "Japón", "Corea del Sur", "Indonesia"],
        "Europa":  ["España", "Francia", "Alemania", "Italia", "Reino Unido"],
        "Norteamérica": ["Estados Unidos", "Canadá", "México", "Cuba", "Costa Rica"],
        "Suramerica":  ["Brasil", "Argentina", "Chile", "Perú", "Colombia"],
        "Oceanía": ["Australia", "Nueva Zelanda", "Fiyi"]
    }
    for (let conti in continentes){
        if (continentes[conti].includes(country)){
            console.log(conti);
        }
    }
}

export function isEven(number:number){
    if  (number % 2 === 0){
        console.log("El numero es par");
    }
    else{
        console.log("El numero es impar");
    }
}

//Cuerpo

// console.log("----------Reto1 condicionales----------");

// console.log(zodiac(8, 1));

// console.log("----------Reto2 condicionales----------");

// continent("España");

// console.log("----------Reto3 condicionales----------");

// isEven(333);
