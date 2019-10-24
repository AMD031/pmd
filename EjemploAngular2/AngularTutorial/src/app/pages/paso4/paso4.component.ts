import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServicioJSONService } from 'src/app/servicios/servicio-json.service';
import { Contacto } from 'src/app/modelo/contacto';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html',
  styleUrls: ['./paso4.component.css']
})
export class Paso4Component implements OnInit {
  
  public cargando:Boolean=false;
  public contactos:any;

  private misubscription:Subscription;

  constructor(private jS:ServicioJSONService) { }

  ngOnInit() {
  }

  cargaLocal(){
    this.contactos=null;
    this.cargando=true;
    this.contactos=this.jS.cargaLocal();
    console.log(this.contactos);
    this.cargando=false;
  }
  cargaRemota(){
    this.contactos=null;
    this.cargando=true;
    this.misubscription=this.jS.cargaJSON().subscribe( data =>{
        console.log("FROM REMOTO:");
        console.log(data);
        this.contactos=data["contactos"];;
        this.cargando=false;
      },
      error=>{
        console.log(error);
      }
    );
    /*
    this.cargando=false; 
    Aquí sería incorrecto, puesto que es una llamada asíncrona.
    Esta línea se ejecuta justo después de la anterior, pero no
    es cuando los datos llegan. Para ello debemos getionar una 
    subscripción (subscribe) a un objeto Observable => que cambia
    asíncronamente como es la respuesta de cargaJson
    */
  }
  ngDestroy(){
    if(this.misubscription)
      this.misubscription.unsubscribe();
  }


  /*La alternativa sería
    Crear contactos:Observable<any>
    contactos=this.jS.cargaJSON();
    en la interfaz:
      *ngFor="let contacto of contactos | async; index as i;"
    Async es un pipe especial que permite objetos observables (cambiantes en el tiempo)
    ser renderizados cuando ocurra el cambio. 
    Ahorra código y no tenemos que gestionar la unsubscribe().
    A este tipo de variables se les suele nombrar con la sintaxis contactos$ por convenio
  */


}