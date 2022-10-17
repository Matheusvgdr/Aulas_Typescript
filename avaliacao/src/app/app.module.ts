import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './alunos/aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
