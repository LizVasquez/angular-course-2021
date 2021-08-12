import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3-clase',
  templateUrl: './test3-clase.component.html',
  styleUrls: ['./test3-clase.component.css']
})
export class Test3ClaseComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
AfterContentChecked, AfterViewInit, AfterViewChecked,AfterViewChecked {

  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
   }

   ngOnInit(){
    console.log('ON INIT');

   }
   
   ngOnChanges(changes:any){
    console.log('ON CHANGES', changes);

   }

   ngDoCheck(){
    console.log('DO CHECK');

   }

   ngAfterContentInit(){
    console.log('CONTENT INIT');

   }

   ngAfterViewInit(){
    console.log('VIEW INIT');

   }

   ngAfterContentChecked(){
    console.log('CONTENT CHECK');

   }

   ngAfterViewChecked(){
    console.log('VIEW CHECK');

   }

   ngOnDestroy(){
    console.log('ON DESTROY');

   }



  

}