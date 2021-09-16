import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';import { HttpClientModule } from '@angular/common/http';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionService } from './services/transaction.service';
import { WalletService } from './services/wallet.service';
;

    

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TransactionService,
    WalletService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
