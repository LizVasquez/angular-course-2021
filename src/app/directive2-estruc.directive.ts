import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[directivaEstruc]'
})

export class Directive2EstrucDirective implements OnChanges {

  @Input() directivaEstruc: boolean = true;

  constructor(private estructural: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef){

      /*if(this.directivaEstruc){
        this.viewContainerRef.createEmbeddedView(this.estructural)
      }else{
        this.viewContainerRef.clear();
      }*/
   }

   ngOnChanges(changes:any){
     //console.log('Changes DirectivaEst:', changes)
     console.log('Changes DirectivaEst:', changes.directivaEstruc.currentValue)

     this.setViewContainer(changes.directivaEstruc.currentValue);

    }


  setViewContainer(show:boolean){
    if(this.directivaEstruc){
      this.viewContainerRef.createEmbeddedView(this.estructural)
    }else{
      this.viewContainerRef.clear();
    }
  }
}