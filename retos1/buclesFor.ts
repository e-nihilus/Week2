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

function isRainbow(colors: string[]){
    let rainbow: string[] = ["rojo", "naranja", "amarillo", "verde","azul", "andigo", "violeta"];

    for (let i = 0; i < colors.length; i++){
        if (rainbow.includes(colors[i])){
            console.log(colors[i] + " está en el arcoiris");
        }
        else{
            console.log(colors[i] + " no está en el arcoiris");
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

// console.log(add(myArr))
