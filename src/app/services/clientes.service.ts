import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  clientesSelect(){
    const ruta= "https://zisoftacademy.com/apiclases/database_clientes.php";
    return this.http.get(ruta);
  }
  clientesDatos(nombre){
    const ruta="" + nombre;
    return this.http.get(ruta);
}
}
