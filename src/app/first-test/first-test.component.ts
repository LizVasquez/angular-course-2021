import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-test',
  template: `
  <div [style.background]="vaccined === 0 ? 'red' : 'green'"
    style="float: left; margin: 20px; padding: 20px;">
    <p>Nombre: {{nombre | uppercase}}</p>
	  <p>edad: {{edad}}</p>
	  <p>date: {{date | date: 'M/d/yy'}}</p>
    <p>vaccined: {{vaccined }}</p>
  </div>

  <button (click)="onVacunar()" [disabled]=" age < 18 && disease == true ">
      vaccinate
    </button>

  `
  ,
  
})
export class FirstTestComponent {
  @Input() nombre: string;
  @Input() edad: number;
  @Input() fecha: string;
  @Input() enfermedad: boolean;
  @Input() tipo: string;
  @Input() vacunado: string;
  @Input() dosis: number;

  @Output() vacunar = new EventEmitter();



  constructor() { }

  onVacunar() {
    this.vacunar.emit();
  }



}