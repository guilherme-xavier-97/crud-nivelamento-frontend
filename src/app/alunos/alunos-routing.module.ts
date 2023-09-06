import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const routes: Routes = [
  { path: '', component: AlunosComponent},
  { path: 'novo-aluno', component: AlunosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
