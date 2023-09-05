import { Alunos } from './../model/aluno';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-alunos',
  styleUrls: ['./alunos.component.scss'],
  templateUrl: './alunos.component.html'
})

export class AlunosComponent  {

  alunos: Alunos[] = [
    {_id: 1, name: 'Guilherme', email: 'teste@teste', curso: 'ADS'},
    {_id: 2, name: 'Juliana', email: 'teste@teste', curso: 'RH'}
  ];

  displayedColumns = ['name', 'email', 'curso'];

  constructor() {
    //this.alunos

  }

}
