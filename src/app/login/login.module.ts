import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule, NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AuthService } from './services/auth.service';


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
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgbButtonsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule



  ],
  providers: [
    AuthService
    
  ]
})
export class LoginModule { }
