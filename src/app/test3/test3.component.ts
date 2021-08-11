import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component{

  var1 = 'Liz';
  var2 = 'vasquez';

  constructor() { }

  test4(event){
    console.log('Data:', this.var1 + ' ' + this.var2);

  }

}