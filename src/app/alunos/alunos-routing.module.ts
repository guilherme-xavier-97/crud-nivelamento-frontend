import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { alunosResolver } from './guards/alunos.resolver';

const routes: Routes = [
  { path: '', component: AlunosComponent},
  { path: 'novo-aluno', component: AlunosFormComponent, resolve: { aluno: alunosResolver} },
  { path: 'editar-aluno/:id', component: AlunosFormComponent, resolve: { aluno: alunosResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
