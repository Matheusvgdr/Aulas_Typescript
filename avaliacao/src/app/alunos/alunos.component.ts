import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from './aluno/aluno.model';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'ava-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos!:Array<Aluno>;

  constructor(private alunosService: AlunosService ) { }

  ngOnInit(): void {
    this.alunosService.listarAlunos().subscribe(alunos => this.alunos = alunos);
  }

}
