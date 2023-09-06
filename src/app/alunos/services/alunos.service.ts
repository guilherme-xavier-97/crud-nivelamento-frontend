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
  readAll() {
    return this.httpClient.get<Alunos[]>(this.URL);
  }

  readOne(id: number) {
    return this.httpClient.get<Alunos>(`${this.URL}/${id}`)
  }

  save(record: Alunos) {
    if(record.id) {
      return this.update(record);
    }
    return this.create(record);

  }

  delete(id: number) {
    return this.httpClient.delete<Alunos>(`${this.URL}/${id}`);
  }

  private create(record: Alunos) {
    return this.httpClient.post<Alunos>(this.URL, record);
  }

  private update(record: Alunos) {
    return this.httpClient.put<Alunos>(`${this.URL}/${record.id}`, record);
  }


}
