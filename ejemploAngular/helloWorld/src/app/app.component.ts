import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloWorld';
  constructor(){
    setTimeout(()=>{
      this.title="Adiós pescao";
    },2000) }
}
