import { Component, OnInit } from '@angular/core';
import { DatosClientes } from 'src/app/entities/datosclientes';
import { DatosclientesService } from 'src/app/services/datosclientes.service';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {
  listaClientes: any[]
  clienteEncontrado: any;

  constructor(private datosclientes: DatosclientesService) { }

  ngOnInit(): void {
    console.log(this.datosclientes.clientesInfo)
    this.datosclientes.listaClientes().subscribe( (data:any) => {
      this.listaClientes = data;
      if(this.datosclientes.clientesInfo){
        this.clienteEncontrado  = this.listaClientes.find( client => {
          return client.usuario === this.datosclientes.clientesInfo.usuario &&  
                client.clave === this.datosclientes.clientesInfo.clave 
        } )
      }
     
      
    } );
    
  }

}
