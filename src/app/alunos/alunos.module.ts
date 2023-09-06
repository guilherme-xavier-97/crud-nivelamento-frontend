import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component'
import { AppMaterialImportsModule} from '../shared/app-material-imports/app-material-imports.module'




@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent
  ],

  imports: [
    CommonModule,
    AppMaterialImportsModule,
    AlunosRoutingModule,
  ]
})
export class AlunosModule { }
