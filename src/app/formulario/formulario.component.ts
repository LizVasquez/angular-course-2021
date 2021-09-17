import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  template: `
  <div style="border: 1px solid navy;">
  <p>CREAR/EDIT</p>
  <p>TRANSACTION</p>
  <form [formGroup]="formulario" style="display: flex; flex-direction: column;" (ngSubmit)="onEdit(form)">
    FROM: <input type="text">
    TO: <input type="text">
    QUANTITY: <input type="number">
    MONEY TYPE: <input type="text">
    MINER: <input type="number">
    

    <button (click)="onSave()">SAVE</button>
  </form>

</div> 

  `
})
export class FormularioComponent implements OnInit, OnChanges{
  formulario: FormGroup;
  @Input() val: any = {
    from: '',
    to: '',
    quantity: '',
    moneyType: '',
    typeMine: '',
    miner: ''
  };

  @Output() enviar = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      from: this.val.from,
      to: this.val.to,
      quantity: this.val.quantity,
      moneyType: this.val.moduleType,
      typerMine: this.val.typeMine,
      miner: this.val.miner
     
      
    });
  }

  onSave():void{
    this.enviar.emit(this.formulario.value);
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change && change.val && this.formulario) {
      this.formulario.patchValue(this.val);
    }
  }

  onEdit(form:any){
    this.enviar.emit(this.formulario.value);
   
    }


  

}