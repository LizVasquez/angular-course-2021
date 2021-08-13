import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {

  @Input() name: string;
  @Input() lastName: string;

  @Output()onSendData = new EventEmitter(null);

  /* myvar de la clase del 10 agosto*/
  myvar1 = 4;
  myvar2 = 5;

  myvar5 = 'Juan';
  myvar6 = 'Perez';
  

  constructor() { }

  onShowData(){
    this.onSendData.emit('General Data ' + this.name + ' ' + this.lastName);

  }

  /* clase de 10 agosto */
  test0(event){
    console.log('event click:', event);
    /*this.myvar1 = 'mundo';*/
    console.log('suma:', this.myvar1 + this.myvar2);
    /*console.log('NAME:', this.myvar5 +' ' + this.myvar6);*/

  }

  test1(event){
    console.log('event blur:', event);
  }

  test3(event){
    console.log('event doubleClick:', event);
  }

}
