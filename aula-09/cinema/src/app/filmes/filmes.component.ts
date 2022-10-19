import { Component, OnInit } from '@angular/core';
import { Filme } from './filme/filme.model';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'cine-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filmes!: Array<Filme>;

  constructor(private filmeService: FilmesService ) { }

  ngOnInit(): void {
    this.filmeService.listarFilmes().subscribe(filmes => this.filmes = filmes);
  }

}
