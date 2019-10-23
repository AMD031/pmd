import { Component, OnInit } from '@angular/core';
import {Contacto} from 'src/app/modelo/contacto';
import { ListadoService } from 'src/app/servicios/listado.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit {
  public enviado:Boolean=false;
  public clase:String="alert alert-success";
  public mensaje:String

  public nombre:String;
  public telefono:Number;

  constructor(private lS:ListadoService) { }

  ngOnInit() {
    }

  onSubmit(){
      if(this.nombre && this.telefono){
        let nc=new Contacto(this.nombre,this.telefono);
        this.lS.nuevoContacto(nc);
        this.nombre=this.telefono=null;
        this.mensaje="Contacto enviado"
        this.clase="alert alert-success";
        console.log(this.lS.leeContactos());
      }else{
        this.mensaje="Debe completar los campos";
        this.clase="alert alert-danger";
      }
      this.enviado=true;
      this.ocultaMensaje();
  }
  ocultaMensaje(){
    setTimeout(()=>{
      this.enviado=false;
    },3000
    );
  }

}