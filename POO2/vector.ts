export class Vector{

    //atributos
    private elements: number[];
    
    //constructor
    constructor(n: number, k: number) {
        this.elements = new Array(n);
        for (let i = 0; i < n; i++) {
          this.elements[i] = Math.floor(Math.random() * (k + 1));
        }
      }
    //metodos

    public print(){
        console.log(this.elements);
    }

    public add(v1: Vector): Vector {
        let result: Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements.push(this.elements[i] + v1.elements[i]);
        }
        return result;
    }

    public subs(v1: Vector): Vector {
        let result: Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements.push(this.elements[i] - v1.elements[i]);
        }
        return result;
    }

    public mult(v1: Vector): Vector {
        let result: Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements.push(this.elements[i] * v1.elements[i]);
        }
        return result;
    }

    public multNumber(n:number):Vector{
        let result:Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements.push(this.elements[i] * n);
        }
        return result;
    }

}

