import { Component, OnInit } from '@angular/core';
import { Filme } from '../filmes/filme/filme.model';
import { FilmesService } from '../filmes/filmes.service';
import { EspacoService } from './espaco.service';

@Component({
  selector: 'cine-espaco',
  templateUrl: './espaco.component.html',
  styleUrls: ['./espaco.component.css']
})
export class EspacoComponent implements OnInit {

  filmes!: Array<Filme>;

  constructor(private espacoService: EspacoService ) { }

  ngOnInit(): void {
    this.espacoService.listarFilmes().subscribe(filmes => this.filmes = filmes);
  }
}
