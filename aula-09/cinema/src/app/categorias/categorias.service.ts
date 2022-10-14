import { Categoria } from "./categoria/categoria.model";

export { CategoriasService};

class CategoriasService{

    categorias: Array<Categoria> = [
        {id: 1, titulo: "Espaço", caminhoImagem: "./assets/img/new1.png"},
        {id: 2, titulo: "Terror", caminhoImagem: "./assets/img/new3.png"},
        {id: 3, titulo: "Drama", caminhoImagem: "./assets/img/new2.png"},
        {id: 4, titulo: "Heróis", caminhoImagem: "./assets/img/new6.png"},
        {id: 5, titulo: "Comédia", caminhoImagem: "./assets/img/new4.png"},
        {id: 6, titulo: "Sci-fi", caminhoImagem: "./assets/img/new5.png"}
      ];
    
    constructor() {}

    listarCategorias(): Array<Categoria>{
        return this.categorias;
    }
}