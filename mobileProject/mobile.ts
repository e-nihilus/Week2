export class Mobile{
    //atributos
    private name:string;
    private trademark:string;
    private model:string;
    private color:string;
    private price:number;

    //constructor
    constructor(name:string, trademark:string, model:string, color:string,price:number){
        this.name=name;
        this.trademark=trademark;
        this.model=model;
        this.color=color;
        this.price=price;
    }

    //metodos
    public get Name():string{
        return this.name;
    }
    public set Name(name:string){
        this.name = name;
    }

    public  get Trademark():string{
        return this.trademark;
    }
    public set Trademark(trademark:string){
        this.trademark = trademark;
    }

    public get Model():string{
        return this.model;
    }
    public set Model(model:string){
        this.model = model;
    }

    public get Color():string{
        return this.color;
    }
    public set Color(color:string){
        this.color = color;
    }

    public get Price():number{
        return this.price;
    }
    public set Price(price:number){
        this.price = price;
    }

    public printAll(){
        console.log("Name: " + this.name);
        console.log("Trademark: " + this.trademark);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
        console.log("Price: " + this.price + "\n");
    }
}