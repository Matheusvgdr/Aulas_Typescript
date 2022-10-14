import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from './categoria.model';

@Component({
  selector: 'cine-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() genero!: Categoria;

  constructor() { }

  ngOnInit(): void {
  }

}
