import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../../login/services/singleton.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private singletonService: SingletonService ) { }

  ngOnInit(): void {
  }

  onShowMessage(){
    console.log(this.singletonService.getMessage());

  }

}

