import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  CategoriasSelect(){
    const ruta ="https://servicioweb-2021.000webhostapp.com/database_categorias.php";
    return this.http.get(ruta);
  }

  categoriasInsert(nombre, apellido, edad, enfermedad){
    const ruta ="https://servicioweb-2021.000webhostapp.com/registrarcategorias.php";
    const formData: FormData = new FormData();
    formData.append("nombre",nombre)
    formData.append("apellido",apellido)
    formData.append("edad",edad)
    formData.append("enfermedad",enfermedad)

    return this.http.post(ruta,formData).pipe(
      map((res) => {
        return res
      
      })
    )

  }

  categoriasUpdate(id,nombre, apellido, edad, enfermedad){
    const ruta ="https://servicioweb-2021.000webhostapp.com/categoriasactualizar.php"; 
    const formData: FormData = new FormData();
    formData.append("id",id)
    formData.append("nombre",nombre)
    formData.append("apellido",apellido)
    formData.append("edad",edad)
    formData.append("enfermedad",enfermedad)

    return this.http.post(ruta,formData)

  }
  categoriasDelete(id){
    const ruta ="https://servicioweb-2021.000webhostapp.com/eliminarcategoria.php"; 
    const formData: FormData = new FormData();
    formData.append("id",id)

    return this.http.post(ruta,formData)

  }

}
