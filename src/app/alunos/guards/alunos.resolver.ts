import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { AlunosService } from '../services/alunos.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alunos } from '../model/aluno';

export const alunosResolver: ResolveFn<Alunos> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  alunosService: AlunosService = inject(AlunosService)
 ): Observable<Alunos> => {

  if(route.params && route.params['id']) {
    return alunosService.readOne(route.params['id']);
    }

  return of ({  id: null, nome: '', email: '', curso: ''})

 }
