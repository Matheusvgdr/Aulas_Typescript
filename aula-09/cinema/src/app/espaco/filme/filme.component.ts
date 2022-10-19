import { Component, Input, OnInit } from '@angular/core';
import { Filme } from 'src/app/filmes/filme/filme.model';

@Component({
  selector: 'cine-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  constructor() { }

  @Input() filme!: Filme;
  
  ngOnInit(): void {
  }

}
