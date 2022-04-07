import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/entities/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: Clientes[];
  clientesFilter: any = { nombre: ''};
  order: String = "id";
  reverse: boolean = false;
  paginaActual: number = 1;


  constructor(private clientesServices: ClientesService) { }

  ngOnInit(): void {
    this.clientesServices.clientesSelect().subscribe(
      (res: Clientes[]) => {
        this.listaClientes = res;
        console.log(res);
      }
    )
  }
setOrder(value: String){
  if(this.order === value){
    this.reverse = !this.reverse;
}
this.order= value
}
}
