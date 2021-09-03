import { Component, OnInit } from '@angular/core';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private test1Service: Test1Service,
              private singletonService: SingletonService) { 
    console.log(this.test1Service.getItems())

    
  }

  ngOnInit(): void {
  }

  setMessage(){
    this.singletonService.setMessage('Hi from login');
  }

}
