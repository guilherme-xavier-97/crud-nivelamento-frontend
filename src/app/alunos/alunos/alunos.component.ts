import { Alunos } from './../model/aluno';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AlunosService } from '../services/alunos.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-alunos',
  styleUrls: ['./alunos.component.scss'],
  templateUrl: './alunos.component.html'
})

export class AlunosComponent  {

  alunos: Observable<Alunos[]>;

  displayedColumns = ['name', 'email', 'curso'];

  //Como no Service tem o @Injectable, a classe stá habilitada a injetar dependencia. Pra injetar, eu faço assim, via construtor
  constructor(private alunosService: AlunosService) {
    this.alunos = this.alunosService.list();

  }

}
