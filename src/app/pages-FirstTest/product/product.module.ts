import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from '../../pages-FirstTest/product/product1/product1.component';
import { Product2Component } from '../../pages-FirstTest/product/product2/product2.component';
import { SharedFirstTestModule } from '../../shared-first-test/shared-first-test.module';
import { Shared1Component } from '../../shared-first-test/shared1/shared1.component';
import { Shared2Directive } from '../../shared-first-test/shared2.directive';
import { Shared3Pipe } from '../../shared-first-test/shared3.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedFirstTestModule
  ],
  declarations: [
    Product1Component,
    Product2Component
  ],

  exports: [
    Product1Component,
    Product2Component,
    
  ]
})
export class ProductModule { }