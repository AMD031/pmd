import { Component, OnInit } from '@angular/core';
      import { ListadoService } from 'src/app/servicios/listado.service';
      import { Contacto } from 'src/app/modelo/contacto';
      
      @Component({
        selector: 'app-paso3',
        templateUrl: './paso3.component.html',
        styleUrls: ['./paso3.component.css']
      })
      export class Paso3Component implements OnInit {
        public contactos:Array<Contacto>;
        public contactoElegido:Contacto=null;
      
        constructor(private lS:ListadoService) { }
      
        ngOnInit() {
          this.contactos=this.lS.leeContactos();
      
          setTimeout(()=>{
            this.lS.nuevoContacto(new Contacto("pepito",123));
          },3000
          );
        }
      
        elegirContacto(c:Contacto){
          this.contactoElegido=c;
        }
      
      }