import {Mobile} from "./mobile"

//-------------------Reto 1----------------------------
let mobil:Mobile = new Mobile("iphone", "apple", "XR", "gris", 799 );

console.log(mobil.Name);
console.log(mobil.Trademark);
console.log(mobil.Model);
console.log(mobil.Color);
console.log(mobil.Price);

mobil.Name = "Samsung";
mobil.Trademark = "Samsung";
mobil.Model = "S21";
mobil.Color = "blanco";
mobil.Price = 549;

console.log(mobil.Name);
console.log(mobil.Trademark);
console.log(mobil.Model);
console.log(mobil.Color);
console.log(mobil.Price);


