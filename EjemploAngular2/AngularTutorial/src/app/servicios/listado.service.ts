import { Injectable } from '@angular/core';
import { Contacto } from '../modelo/contacto';
      
      @Injectable({
        providedIn: 'root'
      })
      export class ListadoService {
        private listaContactos:Array<Contacto>=new Array();
        
        constructor() { }
      
        nuevoContacto(c:Contacto){
          this.listaContactos.push(c);
        }
      
        leeContactos():Array<Contacto>{
          return this.listaContactos;
        }
      }
