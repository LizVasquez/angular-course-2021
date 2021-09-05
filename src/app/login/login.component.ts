import { Component, OnInit } from '@angular/core';
import { PublicationService } from './services/publication.service';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private test1Service: Test1Service,
              private singletonService: SingletonService,
              private publicationService: PublicationService) { 
    console.log(this.test1Service.getItems())

    
  }

  ngOnInit(): void {

    this.publicationService.getAll().subscribe(res => {
      console.log('RESPONSE: ' , res);
    });
  }

  setMessage(){
    this.singletonService.setMessage('Hi from login');
  }

  create(){
    this.publicationService.create({
      "date": "15/82/2021",
      "description": "create from frontend",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    }).subscribe(
      res => console.log(res)
    )

  }

  update(){
    this.publicationService.update('p0001',{
      "date": "17/82/2021",
      "description": "update from frontend",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    }).subscribe(
      res => console.log(res)
    )

  }
  
  delete(){
    this.publicationService.delete('p0002').subscribe(
      res => console.log(res)
    )
  }



  onSubmitTemplante(values:any){
    console.log('VALUES: ', values);

  }
}
