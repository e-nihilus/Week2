import { Mobile } from './mobile';
export class MobileCollection{
    //atributos
    private mobiles: Mobile[];
    private totalPrice: number;

    //constructor
    constructor(mobiles:Mobile[]){
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
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

    private totalPriceCalculation():number{
        let total:number = 0
        for (let i = 0; i < this.mobiles.length; i++) {
            total += this.mobiles[i].Price;
        }
        return total;
    }

    public printCollection(){
        
        this.mobiles.forEach(mobiles => mobiles.printAll());
        console.log ("Price overall: " + this.totalPrice);
    }
}