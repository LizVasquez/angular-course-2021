import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTaskComponent } from './home-task/home-task.component';
import { SubHomeTaskComponent } from './sub-home-task/sub-home-task.component';
import { RouterModule, Routes } from '@angular/router';
import { Home1TaskComponent } from './home-task/home1-task/home1-task.component';
import { Home2TaskComponent } from './home-task/home2-task/home2-task.component';

const tarea : Routes = [
  {path: '', redirectTo: 'home-task',pathMatch: 'full'},
  {path: 'sub-home-task', component: SubHomeTaskComponent},

  {path: 'home-task', component: HomeTaskComponent,
    children: [

    {path: 'home1-task', component: Home1TaskComponent},
    {path: 'home2-task', component: Home2TaskComponent}
    ]
  }
]



@NgModule({
  declarations: [
    HomeTaskComponent,
    SubHomeTaskComponent,
    Home1TaskComponent,
    Home2TaskComponent
    
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tarea)
  ]
})
export class HomeModuleModule { }
