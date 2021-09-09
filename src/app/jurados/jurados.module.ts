import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {path: '', redirectTo: 'jurados1',pathMatch: 'full'},
  {path: 'jurados1', component: Jurados1Component}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Jurados1Component],

  
  
})
export class JuradosModule { }