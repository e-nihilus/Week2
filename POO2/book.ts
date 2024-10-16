export class Book{
    //atributos
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title:string, nPages:number, isbn: string,  author: string, editorial: string){
        this.title = title;
        this.nPages =  nPages;
        this.isbn  = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    //metodos
    public get Title():string{
        return this.title;
    }
    public set Title(titulo:string){
        this.title =  titulo;
    }

    public  get Pages():number{
        return this.nPages;
    }
    public set Pages(nPages:number){
        this.nPages = nPages;
    }

    public  get Isbn():string{
        return this.isbn;
    }
    public set Isbn(isbn:string){
        this.isbn = isbn;
    }

    public get Author():string{
        return  this.author;
    }
    public set Author(author:string){
        this.author = author;
    }

    public  get Editorial():string{
        return this.editorial;
    }
    public set  Editorial(editorial:string){
        this.editorial = editorial;
    }


    public toString(): string{
        return "Title - " + this.title + "\n" + 
        "Numer of Pages - " + this.nPages + "\n" + 
        "ISBN - " + this.isbn + "\n" + 
        "Author - " + this.author + "\n" + 
        "Editorial -" + this.editorial;
    }
}

