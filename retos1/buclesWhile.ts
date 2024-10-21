// 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera tendrá el siguiente aspecto: function startWithM(myNames):boolean

function hasEven(myNums):boolean{
let i:number =0;

    while(i< myNums.length){
        if(myNums[i]%2==0){
            return true;
            }
        i++;
        }   
    return false;
}

function startWithM(myNames):boolean{
    let i:number =0;
    while(i<myNames.length){
        if (myNames[i][0] != 'M'){
            return false;
    }
    i++
    }
    return true;
}


let arrayNums:number[] = [1,9,3,5];
console.log(hasEven(arrayNums));

let  arrayNombres:string[] = ['Miguel','Maria','Juan','Mateo'];
console.log(startWithM(arrayNombres));  


    