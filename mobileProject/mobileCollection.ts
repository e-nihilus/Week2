// Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:
// • mobiles: Mobile[]
// • totalPrice:number

// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.

// 4. Crear los métodos setters y getters para todos los atributos de la clase.

// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.

// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.

// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
// previamente y comprobar todos sus métodos.

// 8. Subir los cambios a GitHub.
import { Mobile } from './mobile';
export class MobileCollection{
    //atributos
    private mobiles: Mobile[];
    private totalPrice: number;

    //constructor
    constructor(mobiles:Mobile[], totalPrice:number){
        this.mobiles = mobiles;
        this.totalPrice = totalPrice;
    }

    //metodos

    public get Mobiles():Mobile[]{
        return this.mobiles;
    }
    public set Mobiles(mobiles:Mobile[]){
        this.mobiles = mobiles;
    }

    public get  TotalPrice(): number {
        return this.totalPrice;
    }
    public set TotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }
}