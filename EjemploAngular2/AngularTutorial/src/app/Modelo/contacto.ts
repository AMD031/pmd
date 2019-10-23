export class Contacto{
    private nombre:String;
    private telefono:Number;

    constructor(n:String,t:Number){
        this.nombre=n;
        this.telefono=t;
    }
    /*
        Todo puede ser sustituido por 
        constructor(private nombre:String, private telefono:Number){}
        Sin necesidad de declarar los atributos
    */
    public setNombre(n:String){
        this.nombre=n;
    }
    public setTelefono(t:Number){
        this.telefono=t;
    }
    public getNombre():String{
        return this.nombre;
    }
    public getTelefono():Number{
        return this.telefono;
    }
}