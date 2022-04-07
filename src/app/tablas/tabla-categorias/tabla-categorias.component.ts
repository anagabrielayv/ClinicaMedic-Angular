import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categorias } from 'src/app/entities/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-tabla-categorias',
  templateUrl: './tabla-categorias.component.html',
  styleUrls: ['./tabla-categorias.component.css']
})
export class TablaCategoriasComponent implements OnInit {
  listaCategorias: Categorias[];
categoriasAgregarForm= new FormGroup({
  nombre: new FormControl(),
  apellido: new FormControl(),
  edad: new FormControl(),
  enfermedad: new FormControl(),
});

paginaActual: number = 1;
nuevaCategoria: any = {} 

faEdit = faEdit;
faTimes = faTimes;

categoriasActualizarForm= new FormGroup({
  id: new FormControl(),
  nombre: new FormControl(),
  apellido: new FormControl(),
  edad: new FormControl(),
  enfermedad: new FormControl()
});
categoriaActualizar: Categorias;


  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.CategoriasSelect().subscribe(
      (res: Categorias[]) => {
        this.listaCategorias = res;
        console.log(res);
      }
    )
  }

  agregarCategoria(values){
    this.categoriasService.categoriasInsert(values.nombre,values.apellido,values.edad,values.enfermedad).subscribe(
      (res) => {
        this.nuevaCategoria = {
          id: res,
          nombre: values.nombre,
          apellido: values.apellido,
          edad: values.edad,
          enfermedad: values.enfermedad
        }
        this.listaCategorias.push(this.nuevaCategoria)
        //var collapseAgregar= document.getElementById("collapseAgregar");
        //collapseAgregar.classList.remove("show");
        this.categoriasAgregarForm.reset();
      }
    )
  }
  editarCategoria(filaCategoria: Categorias){
    console.log(filaCategoria);
    this.categoriaActualizar= filaCategoria;
  }
  actualizarCategoria(values){
    this.categoriasService.categoriasUpdate(values.id,values.nombre,values.apellido,values.edad,values.enfermedad).subscribe();
    document.getElementById("botonCerrar").click();
  }
  eliminarCategoria(filaCategoria: Categorias){
   var respuesta = confirm("¿Estás seguro que desea eliminar la categoria " + filaCategoria.nombre + "?");
   if(respuesta === true){
     this.categoriasService.categoriasDelete(filaCategoria.id).subscribe();
     this.listaCategorias = this.listaCategorias.filter(
       item => item.id !== filaCategoria.id
     );
     alert("Se ha eliminado la categoría: " + filaCategoria.nombre);
   }
}
}
