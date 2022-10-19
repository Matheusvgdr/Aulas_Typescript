import { CINEMA_API } from "../app.api";
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ErrorHandler } from "../app.error-handler";
import { Filme } from "../filmes/filme/filme.model";

export { EspacoService};

@Injectable()
class EspacoService{

    filmes: Array<Filme> = [];
    
    constructor(private http: HttpClient) {}

    listarFilmes(): Observable<Array<Filme>>{
        return this.http.get<Array<Filme>>(`${CINEMA_API}/espaco`).pipe(catchError(ErrorHandler.handleError));
    }
}