import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { Votacion1Component } from './votacion1/votacion1.component';

const routes : Routes = [
  {path: '', redirectTo: 'votacion1',pathMatch: 'full'},
  {path: 'votacion1', component: Votacion1Component}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Votacion1Component]
})
export class VotacionModule { }