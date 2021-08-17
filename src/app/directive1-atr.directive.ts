import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';
/* clase del 16/08 directiva de atributo */
@Directive({
  selector: '[lizDirectiva]'
})
export class Directive1AtrDirective implements OnChanges{

  //@Input() color: string = 'lime';

  @Input() lizDirectiva: string = 'lime';
  @Output() outputDirectiva = new EventEmitter<any>(null);

  color:string;
  

  /* escucha a nivel de directiva */
  @HostListener('click') onclick(){
    console.log('El color es: ', this.lizDirectiva);
    //this.element.nativeElement.style.backgroundColor = this.color;
    this.setBackgroundColor(this.lizDirectiva);
  }
/*---------------------------- */
   /* escucha a nivel de la aplicacion entera
   @HostListener('window:click') onclick(){
    console.log('El color es: ', this.color);
    this.element.nativeElement.style.backgroundColor = this.color;
  }*/

/*---------------------------- */
  /*hace la accion cuando el mouse sale */
  @HostListener('mouseleave') onMouseleave(){
    //this.element.nativeElement.style.backgroundColor = 'pink';
    this.setBackgroundColor('pink');
    this.outputDirectiva.emit('test myoutput Dir');
  }
/*---------------------------- */
    /*hace la accion cuando el mouse entra */
  @HostListener('mouseenter') onMouseenter(){
    //this.element.nativeElement.style.backgroundColor = 'gray';
    this.setBackgroundColor('gray');
  }
 /*---------------------------- */
  constructor(private element: ElementRef) { 
    //this.element.nativeElement.style.backgroundColor = this.color;
    this.setBackgroundColor(this.lizDirectiva);
    this.element.nativeElement.style.border = '3px navy solid';
  }

   /*----------PARA BUENAS PRACTICAS DE CODIGO */
  setBackgroundColor (color:string){
    this.element.nativeElement.style.backgroundColor = color;
   }

   /* tarea de banana box con directiva de atributo */
   ngOnChanges(changes:any){
    this.setBackgroundColor(changes.lizDirectiva.currentValue)
   }

}