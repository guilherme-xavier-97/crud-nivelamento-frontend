import { Alunos } from './../model/aluno';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AlunosService } from '../services/alunos.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-alunos',
  styleUrls: ['./alunos.component.scss'],
  templateUrl: './alunos.component.html'
})

export class AlunosComponent  {

  alunos: Observable<Alunos[]>;

  displayedColumns = ['nome', 'email', 'curso', 'buttons'];

  //Como no Service tem o @Injectable, a classe stá habilitada a injetar dependencia. Pra injetar, eu faço assim, via construtor
  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {

    this.alunos = this.alunosService.readAll();
  }

  onCreate() {
    this.router.navigate(['novo-aluno'], {relativeTo: this.route});
  }

  onUpdate(aluno: Alunos) {
    this.router.navigate(['editar-aluno', aluno.id], {relativeTo: this.route});
  }

  onDelete(aluno: Alunos) {
    this.alunosService.delete(aluno.id).subscribe(
      () => {
        this.snackBar.open('Aluno removido com sucesso!', '', { duration: 5000})
      });
      window.location.reload();

  }

}
