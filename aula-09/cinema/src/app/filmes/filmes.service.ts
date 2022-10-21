import { CINEMA_API } from "../app.api";
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ErrorHandler } from "../app.error-handler";
import { Filme } from "./filme/filme.model";

export { FilmesService};

@Injectable()
class FilmesService{

    filmes: Array<Filme> = [];
    
    constructor(private http: HttpClient) {}

    listarFilmes(id: number): Observable<Array<Filme>>{
        return this.http.get<Array<Filme>>(`${CINEMA_API}/filmes?categoriaId=${id}`).pipe(catchError(ErrorHandler.handleError));
    }
}