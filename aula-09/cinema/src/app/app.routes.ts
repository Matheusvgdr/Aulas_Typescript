import { Routes } from "@angular/router";
import { CategoriasComponent } from "./categorias/categorias.component";
import { EspacoComponent } from "./espaco/espaco.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { TerrorComponent } from "./terror/terror.component";

export const ROUTES: Routes = [
    {path: '', component:HomeComponent},
    {path: 'sobre', component:SobreComponent},
    {path: 'categorias', component:CategoriasComponent},
    {path: 'terror-pg', component:TerrorComponent},
    {path: 'espaco-pg', component:EspacoComponent}
];