import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input() data:any;
  @Input()from: string;
  @Input() to: number;
  @Input() quantity: number;
  @Input() moneyType: string;
  @Input() mineType: string;
  @Input() miner: number;

  @Output() edit = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    this.edit.emit();
}
}