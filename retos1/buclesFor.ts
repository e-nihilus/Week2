//Declaracion funciones
function evenNumbers(num:number){
    for (let i=0;  i<=num; i++){
        if (i % 2 !=0){
            console.log(i);
        }
    }
}

function  myRevert(myArr:string[]):string[]{
    let revertA: string[] = [];
    for (let i = myArr.length -1; i >= 0; i--){
        revertA.push(myArr[i]);
    }
    return revertA;
}

function isRainbow(colors: string[]): void {
    for (let color of colors) {
      if (color === 'rojo') {
        console .log(color + " está en el arcoíris.");
      } 
      else if (color === 'naranja') {
        console.log(color + " está en el arcoíris.");
      } 
      else if (color === 'amarillo') {
        console.log(color + " está en el arcoíris.");
      } 
      else if (color === 'verde') {
        console.log(color + " está en el arcoíris.");
      } 
      else if (color === 'azul') {
        console.log(color + " está en el arcoíris.");
      } 
      else if (color === 'añil') {
        console.log(color + " está en el arcoíris.");
      } 
      else if (color === 'violeta') {
        console.log(color + " está en el arcoíris.");
      } 
      else {
        console.log(color + " no está en el arcoíris.");
      }
    }
  }

export function add(myWords: string[]):number{
    let sumPal: number = 0;
    for ( let i=0; i<myWords.length; i++){
        sumPal += myWords[i].length;
    }
    return sumPal;
}

//Cuerpo

// console.log("----------Reto1----------");

// evenNumbers(10)

// console.log("----------Reto2----------");

// let myArr: string[] = ["Hola", "que", "tal", "estas", "?"]

// console.log(myRevert(myArr));

// console.log("----------Reto3----------");

// let colors: string[] = ["rojo", "verde", "negro", "blanco", "azul"]
// isRainbow(colors);

// console.log("----------Reto4----------");

// console.log(add(myArr))

