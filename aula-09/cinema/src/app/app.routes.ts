import { Routes } from "@angular/router";
import { CategoriasComponent } from "./categorias/categorias.component";
import { EspacoComponent } from "./espaco/espaco.component";
import { FilmesComponent } from "./filmes/filmes.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";

export const ROUTES: Routes = [
    {path: '', component:HomeComponent},
    {path: 'sobre', component:SobreComponent},
    {path: 'categorias', component:CategoriasComponent},
    {path: 'categorias/terror-pg', component:FilmesComponent},
    {path: 'categorias/espaco-pg', component:EspacoComponent},
    {path: 'filmes', component:FilmesComponent}
];