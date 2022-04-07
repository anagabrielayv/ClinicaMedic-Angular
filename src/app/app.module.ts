import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { HomeComponent } from './inicio/home/home.component';
import { SectionComponent } from './inicio/section/section.component';
import { AboutComponent } from './inicio/about/about.component';
import { PageservicioComponent } from './inicio/pageservicio/pageservicio.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { MedicinaComponent } from './components/medicina/medicina.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesDetalleComponent } from './components/clientes-detalle/clientes-detalle.component';
import { TablaCategoriasComponent } from './tablas/tabla-categorias/tabla-categorias.component';
import { LoginComponent } from './components/login/login.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavComponent,
    BannerComponent,
    HomeComponent,
    SectionComponent,
    AboutComponent,
    PageservicioComponent,
    SubscribeComponent,
    BlogComponent,
    ContactComponent,
    DoctoresComponent,
    MedicinaComponent,
    ClientesComponent,
    ClientesDetalleComponent,
    TablaCategoriasComponent,
    LoginComponent,
    EscritorioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule, 
    ReactiveFormsModule,
    FontAwesomeModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
