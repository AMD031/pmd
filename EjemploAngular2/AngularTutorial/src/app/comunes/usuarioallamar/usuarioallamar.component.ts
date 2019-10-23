import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from 'src/app/modelo/contacto';

@Component({
  selector: 'app-usuarioallamar',
  templateUrl: './usuarioallamar.component.html',
  styleUrls: ['./usuarioallamar.component.css']
})
export class UsuarioallamarComponent implements OnInit {
  @Input() contacto:Contacto;

  constructor() { }

  ngOnInit() {
  }

  llamar(){
    console.log("Rinnnngggg!!!");
  }

}  