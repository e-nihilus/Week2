import {Point} from "./point"

export class Triangle{
    //atributos
    private vertex1: Point
    private vertex2: Point
    private vertex3: Point

    //constructor
    constructor(vertex1:Point, vertex2:Point, vertex3:Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    //metodos
    public calculateLengthSides():number[]{
        let longLados: number[] = [];
        longLados.push(this.vertex1.calculateDistance(this.vertex2));
        longLados.push(this.vertex2.calculateDistance(this.vertex3));
        longLados.push(this.vertex1.calculateDistance(this.vertex3));
        return longLados;
    }


}