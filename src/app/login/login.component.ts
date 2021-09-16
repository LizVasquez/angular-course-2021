import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from '../core/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

 
  constructor(private authService: AuthService,
              private matDialog: MatDialog,
              private router: Router) { 
    
      
  }

  ngOnInit(): void {
    if(this.authService.verifyLogged()){
      this.router.navigate(['pages']);
    }
    

  }

  login(form:any){
    this.authService.login({
      email: form.value.email,
      password:form.value.password,
      returnSecureToken: true

    }).subscribe(res => {
      console.log('RESPONSE',res);
      this.router.navigate(['pages']); 
    });


  }

  onCreateNewAccount(){
    this.matDialog.open(RegisterComponent)

  }
}
