import { Component } from '@angular/core';

@Component({
  selector: 'snc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  alunos = {nome: "João", aprovado: true}

  nome: string = 'João da Silva';
  aprovado: boolean = true;
}
