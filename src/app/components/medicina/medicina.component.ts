import { Component, Input, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/entities/especialidad';
import { Medicina } from 'src/app/entities/medicina';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.component.html',
  styleUrls: ['./medicina.component.css']
})
export class MedicinaComponent implements OnInit {

  @Input() EspecialidadX: Especialidad;
  listaMedicina: Medicina[];


  constructor(private medicinaService: DatosService) { }

  ngOnInit(): void {
    console.log(this.EspecialidadX);
  }
  ngOnChanges(): void {
    console.log(this.EspecialidadX);
    this.leerMedicinas();
  }

  leerMedicinas(){
    const idEspecialidad = this.EspecialidadX.idEspecialidad;
    this.medicinaService.medicinaSelect(idEspecialidad).subscribe(
      (res: Medicina[]) => {
        this.listaMedicina = res;
        console.log(res);
      }
    )
  }

}
