import { Component, OnInit } from '@angular/core';
import { DataBanner } from 'src/app/entities/DataBanner';

import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  //Creas la lista a recorrer
  listDataBanner : DataBanner[];
  //El nombre del arreglo de la derecha viene del modelado Entities
  

  //A la derecha va la clase que contiene el servicio
  constructor(private dataBannerService: DatosService) { }

  ngOnInit(): void {
    //Hacemos referencia al metodo dentro del servicio para consumirlo
    this.dataBannerService.DatosBanner().subscribe(
      (res: DataBanner[]) => {
        this.listDataBanner = res;
        console.log(res);
      }
    )

  }

}
