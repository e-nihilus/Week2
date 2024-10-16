import {Book} from "./book";
export class Library{
    //atributos
    private book: Book[];
    private adress: string;
    private manager: string;

    //constructor
    constructor(book: Book[], adress: string, manager: string){
        this.book = book;
        this.adress = adress;
        this.manager = manager;
    }

    //metodos
    public set Adress(adress: string){
        this.adress =  adress;
    }
    public get Adress(): string{
        return this.adress;
    }

    public set Manager(manager: string){
        this.manager = manager;
    }
    public get Manager(): string{
        return this.manager;
    }


    public toString(): string{
        let libro:string =  "";
        for (let i=0; i< this.book.length ; i++){
        libro +=  "\n" + "Libro" + (1 + i) + ":" + 
        "Title - " + this.book[i].Title + "\n" + 
        "Numer of Pages - " + this.book[i].Pages + "\n" + 
        "ISBN - " + this.book[i].Isbn + "\n" + 
        "Author - " + this.book[i].Author + "\n" + 
        "Editorial -" + this.book[i].Editorial;
        }
        return libro
    }

    public getNumberOfBooks():number{
        return this.book.length;
    }

    public findByAuthor (author:string):Book[]{
        let autor:Book[] = [];
        for (let i=0; i< this.book.length ; i++){
            if (this.book[i].Author == author){
                autor.push(this.book[i]);
            }
        }
        return autor
    }
}
