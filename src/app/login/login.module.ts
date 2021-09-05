import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule, NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { Test1Service } from './services/test1.service';
import { Login1Component } from './components/login1/login1.component';
import { Login2Component } from './components/login2/login2.component';
import { UtilsService } from './services/utils.service';
import { PublicationService } from './services/publication.service';


const routes: Routes= [
  {path: '', component: LoginComponent}

]

@NgModule({
  declarations: [
    LoginComponent,
    Login1Component,
    Login2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbToastModule,
    NgbButtonsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule


  ],
  providers: [
    Test1Service,
    UtilsService,
    PublicationService
  ]
})
export class LoginModule { }
