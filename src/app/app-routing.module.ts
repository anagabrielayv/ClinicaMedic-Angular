import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesDetalleComponent } from './components/clientes-detalle/clientes-detalle.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './inicio/home/home.component';
import { TablaCategoriasComponent } from './tablas/tabla-categorias/tabla-categorias.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'doctores', component: DoctoresComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientesdetalle/:id', component: ClientesDetalleComponent},
  {path: 'tablacategorias', component: TablaCategoriasComponent},
  {path: 'iniciarsesion', component: LoginComponent},
  {path: 'escritorio', component: EscritorioComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
