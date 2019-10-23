import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Contacto } from '../modelo/contacto';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(private socket:HttpClient) { }

  cargaJSON():Observable<Object>{
    return this.socket.get(environment.JSONServiceURL);
  }
  cargaLocal(){
    let clocal = [
      {
        nombre: 'Juan',
        telefono: 123
      },
      {
        nombre: 'María',
        telefono: 456
      }
    ];
    return clocal;
  }
}
