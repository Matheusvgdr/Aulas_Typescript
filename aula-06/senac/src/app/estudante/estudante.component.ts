import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from './estudante.model';

@Component({
  selector: 'snc-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  constructor() { }

  // alunos = {nome: "João", aprovado: true}

  @Input() estudante!: Estudante;

  ngOnInit(): void {
  }

  exibir(){
    console.log(`Estudante: ${event}`);
  }

  keyDown(event:any): void{
    console.log(`Key ${event}`);
  }
}
