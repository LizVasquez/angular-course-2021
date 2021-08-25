import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from '../../pages-FirstTest/client/client1/client1.component';
import { Client2Component } from '../../pages-FirstTest/client/client2/client2.component';
import { SharedModule } from '../../shared/shared.module';
import { ProviderModule } from '../../pages-FirstTest/provider/provider.module';
import { Shared1Component } from '../../shared-first-test/shared1/shared1.component';
import { Shared2Directive } from '../../shared-first-test/shared2.directive';
import { Shared3Pipe } from '../../shared-first-test/shared3.pipe';
import { Provider1Component } from '../../pages-FirstTest/provider/provider1/provider1.component';
import { Provider2Component } from '../../pages-FirstTest/provider/provider2/provider2.component';
import { SharedFirstTestModule } from '../../shared-first-test/shared-first-test.module';

@NgModule({
  imports: [
    CommonModule,
    SharedFirstTestModule,
    ProviderModule
  ],
  declarations: [
    Client1Component,
    Client2Component
  ],
  exports: [
    Client1Component,
    Client2Component

  ]
})
export class ClientModule { }