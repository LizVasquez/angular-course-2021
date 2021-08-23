import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-test',
  template: `
  <div [style.background]="vacunado === 0 ? 'red' : 'green'"
    style="float: left; margin: 20px; padding: 20px;">
    <p>Nombre: {{nombre | uppercase}}</p>
	  <p>edad: {{edad}}</p>
	  <!-- <p>date: {{fecha | date: 'M/d/yy'}}</p> -->
    <p> date: {{fecha}}</p> 
    <p>vaccined: {{vacunado}}</p>
    <p *ngIf="vacunado===0">vaccineType: {{tipo}}</p>
    <p *ngIf="vacunado===0">doses: {{dosis}}</p>
    <p *ngIf="vacunado===0">disease: {{enfermedad}}</p>

    <button *ngIf="vacunado===0" (click)="onVacunar()" [disabled]="age<18 || disease == true">
      vaccinate
    </button>
  </div>

  

  `
  
  ,
  
})
export class FirstTestComponent {
  @Input() nombre: string;
  @Input() edad: number;
  @Input() fecha: string;
  @Input() enfermedad: boolean;
  @Input() tipo: string;
  @Input() vacunado: number;
  @Input() dosis: number;

  @Output() vacunar = new EventEmitter();



  constructor() { }

  onVacunar() {
    this.vacunar.emit();
  }



}