import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTaskComponent } from './admin-task/admin-task.component';
import { SubAdminTaskComponent } from './sub-admin-task/sub-admin-task.component';
import { Admin1TaskComponent } from './admin-task/admin1-task/admin1-task.component';
import { Admin2TaskComponent } from './admin-task/admin2-task/admin2-task.component';
import { RouterModule, Routes } from '@angular/router';

const tarea : Routes = [
  {path: '', redirectTo: 'admin-task',pathMatch: 'full'},
  {path: 'sub-admin-task', component: SubAdminTaskComponent},

  {path: 'admin-task', component: AdminTaskComponent,
    children: [

    {path: 'admin1-task', component: Admin1TaskComponent},
    {path: 'admin2-task', component: Admin2TaskComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AdminTaskComponent,
    SubAdminTaskComponent,
    Admin1TaskComponent,
    Admin2TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tarea)
  ]
})
export class AdminModuleModule { }
