import { Injectable } from "@angular/core";
import { Aluno } from "./aluno/aluno.model";
import {HttpClient} from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ALUNO_API } from "../app.api";
import { ErrorHandler } from "../app.error.handler";

export {AlunosService};

@Injectable()
class AlunosService{
    
    alunos: Array<Aluno> = [];
    
    constructor(private http: HttpClient){}

    listarAlunos(): Observable<Array<Aluno>>{
        return this.http.get<Array<Aluno>>(`${ALUNO_API}/alunos`).pipe(catchError(ErrorHandler.handleError));
    }
}