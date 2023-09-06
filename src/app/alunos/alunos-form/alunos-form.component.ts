import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunosService } from '../services/alunos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alunosService: AlunosService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
      curso: [null]

    });
  }

  onSubmit() {
    this.alunosService.create(this.formulario.value).subscribe(reposta_chamada => this.onSuccess());
    this.location.back();

  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Aluno salvo com sucesso!', '', { duration: 5000});
  }

}
