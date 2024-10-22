import {Mobile} from "./mobile"

//-------------------Reto 1----------------------------
let mobil:Mobile = new Mobile("iphone", "apple", "XR", "gris", 799 );

// console.log(mobil.Name);
// console.log(mobil.Trademark);
// console.log(mobil.Model);
// console.log(mobil.Color);
// console.log(mobil.Price);

// mobil.Name = "Samsung";
// mobil.Trademark = "Samsung";
// mobil.Model = "S21";
// mobil.Color = "blanco";
// mobil.Price = 549;

// console.log(mobil.Name);
// console.log(mobil.Trademark);
// console.log(mobil.Model);
// console.log(mobil.Color);
// console.log(mobil.Price);

//----------------------Reto 2---------------------------

let mobil2:Mobile = new Mobile("Samsung", "Samsung", "Galaxy", "azul", 659);
let mobil3:Mobile = new Mobile("Xiaomi", "Xiaomi", "redmi 10", "blanco", 399);
let arrayM:Mobile[] = [mobil, mobil2, mobil3];

for (let i=0; i<arrayM.length; i++){
    arrayM[i].printAll();
}
