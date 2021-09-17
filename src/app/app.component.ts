import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  tipoForm = true;

  formValues: any = {
    from: '',
    to: '',
    quantity: '',
    moneyType: '',
    typeMine: '',
    miner: ''
  };

  wallets: any[] = [];
  transactions: any[] = [];
  idEdit: any;

  constructor(private walletService: WalletService,
              private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.loadWallets();
    this.loadTransactions();
  }

  onMine(transaction: any): void {
    const walletFROM = this.wallets.find(w => w.wallet === transaction.from);
    const walletTO = this.wallets.find(w => w.wallet === transaction.to);

    walletFROM[transaction.moneyType] = walletFROM[transaction.moneyType] - transaction.quantity;
    walletTO[transaction.moneyType] = walletTO[transaction.moneyType] + transaction.quantity;

    this.transactionService.delete(transaction.id).subscribe(() => this.loadTransactions());
    this.walletService.update(walletFROM.id, walletFROM).subscribe(res => this.loadWallets());
    this.walletService.update(walletTO.id, walletTO).subscribe(res => this.loadWallets());

  }

  getTransactionsStatus(): boolean {
    const aux = this.transactions.filter(t => t.mineType === 'PoS' && t.miner > 5);
    return this.transactions.length === aux.length;
  }

  getTotalCoin(type: string): number {
    return this.wallets.reduce((acc, value) => acc + (value[type] > 0 ? value[type] : 0), 0);
  }

  loadTransactions(): void {
    this.transactionService.getAll().subscribe(res =>
      this.transactions = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }

  loadWallets(): void {
    this.walletService.getAll().subscribe(res =>
      this.wallets = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }

  onEdit(transaction): void{
    this.idEdit = transaction.id;
    this.formValues= transaction;
  }

  onSave(data): void {
    if (this.tipoForm) {
    this.transactionService.create({
      from: data.from,
      to: data.to,
      quantity: data.quantity,
      moneyType: data.moneyType,
      typeMine: data.mineType,
      miner: data.miner,
      date: new Date()

    }

    ).subscribe(() => this.loadTransactions());
    } else {
       this.transactionService.patch(this.idEdit, data).subscribe(() => this.loadTransactions());
    }
  }




  

 




}
