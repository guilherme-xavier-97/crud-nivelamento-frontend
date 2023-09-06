import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunosService } from '../services/alunos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Alunos } from '../model/aluno';

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
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null],
      email: [null],
      curso: [null]

    });
  }

  onSubmit() {

    if(this.formulario.value)
    this.alunosService.save(this.formulario.value).subscribe(reposta_chamada => this.onSuccess());
    this.location.back();

  }

  onCancel() {
    this.location.back();
  }

  ngOnInit(): void {
    const aluno: Alunos = this.route.snapshot.data['aluno'];
    this.formulario.setValue({
      id: aluno.id,
      nome: aluno.nome,
      email: aluno.email,
      curso: aluno.curso
    })

  }

  private onSuccess() {
    this.snackBar.open('Aluno salvo com sucesso!', '', { duration: 5000});
  }

}
