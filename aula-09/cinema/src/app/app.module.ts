import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { TerrorComponent } from './terror/terror.component';
import { EspacoComponent } from './espaco/espaco.component';
import { SobreComponent } from './sobre/sobre.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriasService } from './categorias/categorias.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    TerrorComponent,
    EspacoComponent,
    SobreComponent,
    CabecalhoComponent,
    HomeComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [
    CategoriasService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
