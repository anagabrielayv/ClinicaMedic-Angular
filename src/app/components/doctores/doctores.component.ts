import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/entities/especialidad';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

    listaEspecialidad : Especialidad[];
    especialidadElegida : Especialidad;
  constructor(private especialidadService: DatosService) { }

  ngOnInit(): void {
    this.especialidadService.DatosEspecialidad().subscribe(
      (res: Especialidad[]) => {
        this.listaEspecialidad = res;
        console.log(res);
      }
    )
  }
  seleccionar(especialidadSeleccionada: Especialidad){
    this.especialidadElegida = especialidadSeleccionada;
  }

}
