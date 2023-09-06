import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ]
})
export class AlunosModule { }
