import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';
import { Clientes } from 'src/app/entities/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-detalle',
  templateUrl: './clientes-detalle.component.html',
  styleUrls: ['./clientes-detalle.component.css']
})
export class ClientesDetalleComponent implements OnInit {
  cliente: Clientes;
  constructor(
    private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService 
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        const id= params.id
        console.log(id)
        this.leerClientes(id)
      }
    )
  }
    leerClientes(id){
      this.clientesService.clientesSelect().subscribe(
        (res: Clientes[]) => {
          // this.clientes = res
          const clientes = res;
          this.cliente = clientes.find( cli => cli.id == id)
          console.log({res})
          console.log(this.clientesService)
        }
      )
    }
}
