import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3ClaseComponent } from './test3-clase/test3-clase.component';
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test3ClaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
