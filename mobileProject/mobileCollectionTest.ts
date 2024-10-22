import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let mobil1:Mobile = new Mobile("iphone", "apple", "XR", "gris", 799 );
let mobil2:Mobile = new Mobile("Samsung", "Samsung", "Galaxy", "azul", 659);
let mobil3:Mobile = new Mobile("Xiaomi", "Xiaomi", "redmi 10", "blanco", 399);
let mobil4:Mobile = new Mobile("Huawei", "Huawei", "P30",  "negro", 699);

let arrayC:Mobile[] = [mobil1, mobil2, mobil3, mobil4];

let myCollection:MobileCollection = new MobileCollection(arrayC, 1000);

console.log(myCollection.Mobiles);
console.log(myCollection.TotalPrice);

myCollection.Mobiles = arrayC
myCollection.TotalPrice = 3000;

console.log(myCollection.Mobiles);
console.log(myCollection.TotalPrice);

