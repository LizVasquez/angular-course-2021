import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NgbButtonsModule, NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { Test1Service } from './services/test1.service';


const routes: Routes= [
  {path: '', component: LoginComponent}

]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbToastModule,
    NgbButtonsModule,
    MatSliderModule,
    MatProgressSpinnerModule


  ],
  providers: [
    Test1Service
  ]
})
export class LoginModule { }
