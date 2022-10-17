import { Categoria } from "./categoria/categoria.model";
import { CINEMA_API } from "../app.api";
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ErrorHandler } from "../app.error-handler";

export { CategoriasService};

@Injectable()
class CategoriasService{

    categorias: Array<Categoria> = [];
    
    constructor(private http: HttpClient) {}

    listarCategorias(): Observable<Array<Categoria>>{
        return this.http.get<Array<Categoria>>(`${CINEMA_API}/categorias`).pipe(catchError(ErrorHandler.handleError));
    }
}