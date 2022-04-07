import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

 
  DatosRemotos(){
    const ruta = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get(ruta);
  }
  DatosBanner(){
    const ruta = "https://zisoftacademy.com/apiclases/database_rpa.php"
    return this.http.get(ruta);
  }
  DatosBlog(){
    const ruta = "https://zisoftacademy.com/apiclases/database_new.php"
    return this.http.get(ruta);
  }

  DatosEspecialidad(){
    const ruta = "https://zisoftacademy.com/apiclases/database_especialidad.php"
    return this.http.get(ruta);
  }

  medicinaSelect(idEspecialidad){
    const ruta = "https://zisoftacademy.com/apiclases/database_medicina.php"
    

    const formData: FormData = new FormData();
    formData.append("caty",idEspecialidad)

    return this.http.post(ruta,formData).pipe(
      map((res) => {
        return res
      })
    )
  }

}
