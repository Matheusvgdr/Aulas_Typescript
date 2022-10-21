import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from './filme/filme.model';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'cine-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filmes!: Array<Filme>;

  constructor(private filmeService: FilmesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filmeService.listarFilmes(this.route.snapshot.params['id']).subscribe(filmes => this.filmes = filmes);
  }

}
