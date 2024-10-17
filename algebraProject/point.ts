export class Point{
    //atributos
    private x: number;
    private y: number;
    //constructor
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    //metodos
    public get X():number {
        return this.x;
    }
    public set X(x: number) {
        this.x = x;
    }

    public get Y():number {
        return this.y;
    }
    public set Y(y: number) {
        this.y = y;
    }

    public toString():string{
        return "(" + this.x + "," + this.y + ")";
    }

public distanceToOrigin():number{
    return Math.sqrt(Math.pow(this.x , 2) + Math.pow(this.y , 2));
}

public calculateDistance(anotherPoint:Point):number{
    return Math.sqrt(Math.pow (this.x - anotherPoint.x, 2) + Math.pow(this.y - anotherPoint.y, 2))
}


}

