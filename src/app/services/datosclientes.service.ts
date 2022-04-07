import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosclientesService {

  clientesInfo: any;
  
  constructor(private http: HttpClient) { }

  listaClientes(){
    const ruta ="https://servicioweb-2021.000webhostapp.com/servicioclientes.php";
    return this.http.get(ruta);

  }
}
