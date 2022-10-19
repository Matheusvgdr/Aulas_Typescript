import { Routes } from "@angular/router";
import { AlunosComponent } from "./alunos/alunos.component";
import { HomeComponent } from "./home/home.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { SobreComponent } from "./sobre/sobre.component";

export {ROUTES};

const ROUTES: Routes = [
     {path: '', component:HomeComponent},
     {path: 'sobre', component:SobreComponent},
     {path: 'perfil', component: PerfilComponent},
     {path: 'alunos', component: AlunosComponent}
 ];