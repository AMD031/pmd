import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
 copyright='Hecho por nosotros';
  hoy= new Date();
  url = "http\\www.google.es";
  mitexto='texto por defecto';

  constructor(public copyright:string, public hoy:Date, 
    public url:string) { 

  }

  diHola(){
    alert("hola");
  }


  ngOnInit() {
  }

}
