import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let mobil1:Mobile = new Mobile("iphone", "apple", "XR", "gris", 799 );
let mobil2:Mobile = new Mobile("Samsung", "Samsung", "Galaxy", "azul", 659);
let mobil3:Mobile = new Mobile("Xiaomi", "Xiaomi", "redmi 10", "blanco", 399);
let mobil4:Mobile = new Mobile("Huawei", "Huawei", "P30",  "negro", 699);

let arrayC:Mobile[] = [mobil1, mobil2, mobil3, mobil4];

let myCollection:MobileCollection = new MobileCollection(arrayC);

// console.log(myCollection.Mobiles);

// myCollection.Mobiles = arrayC

// console.log(myCollection.Mobiles);
// //---------------Reto2
// console.log(myCollection.TotalPrice);

//-------------Reto 3

myCollection.printCollection();
