//Declaracion de funciones
function zodiac(day: number, month: number): string {
    let sign: string = "";
    if (month === 1 && day>=20) {
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
    if (country  === "España" || country === "Italia" || country === "Francia" || country === "Alemania"){
        console.log("Europa");
    }
    if (country  === "China" || country === "Japon" || country === "Mongolia" || country === "India"){
        console.log("Asia");
    }
    if (country  === "Egipto" || country === "Dubai" || country === "Tunez" || country === "Sudafrica"){
        console.log("Africa");
    }
    if (country  === "Eustados Unidos" || country === "Canada" || country === "Argentina" || country === "Mexico"){
        console.log("America");
    }
    if (country  === "Australia" || country === "Nueva Zelanda" || country === "Fiyi" || country === "Samoa"){
        console.log("Oceania");
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

// console.log("----------Reto1----------");

// console.log(zodiac(8, 1));

// console.log("----------Reto2----------");

// continent("España");

// console.log("----------Reto3----------");

// isEven(333);
