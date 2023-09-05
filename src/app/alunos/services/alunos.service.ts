import { Injectable } from '@angular/core';
import { Alunos } from '../model/aluno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  //private URL = '/assets/alunos.json';
  private URL = 'http://localhost:8080/api/alunos'

  constructor(private httpClient: HttpClient) { }

  /*por padrão, o get() retorna um Observable, ou seja, um dado de um tipo qualquer, mas que será carregado de forma assincrona,
  como os Promises do JS. Mas aqui eu "forcei" a retornar um tipo Alunos[]*/
  list() {
    return this.httpClient.get<Alunos[]>(this.URL);
  }
}
