interface persona {
    nombre:String
    edad:number
}

    let personas:persona[]=[];

    function agregar( ): void { 
        let nombre:string=(<HTMLInputElement>document.getElementById('nombre')).value;
        let edad:number=+(<HTMLInputElement>document.getElementById('edad')).value;
        let contacto: persona = {
        nombre: nombre,
        edad: edad }
       personas.push(contacto)

    }

    function imprimir():void{
      for(let p of personas  ){
        console.log(p);
      }
    }
   

    


    



    





