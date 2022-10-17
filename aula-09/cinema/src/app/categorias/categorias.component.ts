import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'cine-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias!: Array<Categoria>;

  constructor(private categoriaService: CategoriasService ){ }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }

  
}
