import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';

@Component({
  selector: 'ava-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  @Input() alunos!: Aluno;
  
  constructor() { }

  ngOnInit(): void {
  }

}
