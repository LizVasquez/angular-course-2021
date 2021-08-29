import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
      <p class="hola">
    admin2 works!
    </p>
    <p>{{ test3 ?? test4}}</p>
    <p>{{ test3 || 'jajajaja'}}</p>
    <!--<button (click)="testParams()"> TEST TEMPLATE TS</button>-->
    <button (click)="testParams('hola', 'chau')"> TEST TEMPLATE TS</button>
  `,
  styles: [
    `
    .hola{
      background-Color: yellow;
      color: navy;

    }
    `
  ]
 
})
export class Admin2Component implements OnInit {

  test3 = null;
  test4= 'maria';

  constructor() { }

  ngOnInit() {
  }



  /*clase 19/08 reduccion de componente */

  /** 
   * @params name 
   * @params lastName 
   * return name and lastName joined
  */
  public testParams(name: string, lastname : string = 'Liliana'): string{
    const aux = 'juan';
    console.log(name  ??  aux + ' '+ lastname)
    return name + ' ' + lastname;

  }

}