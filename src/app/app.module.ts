import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Directive1AtrDirective } from './directive1-atr.directive';
import { Directive2EstrucDirective } from './directive2-estruc.directive';
import { Module1Module } from './module1/module1.module';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3ClaseComponent } from './test3-clase/test3-clase.component';
import { Test3Component } from './test3/test3.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { HomeCComponent } from './home-c/home-c.component';
import { Home1cComponent } from './home-c/home1c/home1c.component';
import { Home2cComponent } from './home-c/home2c/home2c.component';
import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { AdminCComponent } from './admin-c/admin-c.component';
import { Admin1cComponent } from './admin-c/admin1c/admin1c.component';
import { Admin2cComponent } from './admin-c/admin2c/admin2c.component';
import { Admin1Component } from './pages/admin/admin1/admin1.component';
import { Admin2Component } from './pages/admin/admin2/admin2.component';



const routes: Routes=[
  {
    path: '', redirectTo: 'view1', pathMatch: 'full'
  },

  {path: 'view1', component: View1Component,
    children: [

      {
        path: '', redirectTo:'view1sub1', pathMatch: 'full'

      },

      {
        path: 'view1sub1', component: View1sub1Component,

      },
      {
        path: 'view1sub2', component: View1sub2Component,

      }

    ]
    

  },
  {path: 'view2/:id/sub/:id2', component: View2Component},

  //para navegacion por modulos
  {
    path: 'view3',loadChildren:() => import('./view3/view3.module').then(m => m.View3Module)
  }
];

const tarea: Routes=[
  { path: 'home-c', component: HomeCComponent,
    children: [

    {path: '', redirectTo:'home1c', pathMatch: 'full'},
    {path: 'home1c', component: Home1cComponent,},
    {path: 'home2c', component: Home2cComponent,}

  ]},
  { path: 'admin-c', component: AdminCComponent,
    children: [

    {path: '', redirectTo:'admin1c', pathMatch: 'full'},
    {path: 'admin1c', component: Admin1cComponent,},
    {path: 'admin2c', component: Admin2cComponent,}

  ]}


];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test3ClaseComponent,
    Directive1AtrDirective,
    Directive2EstrucDirective,
    View1Component,
    View2Component,
    View1sub1Component,
    View1sub2Component,
    HomeCComponent,
    Home1cComponent,
    Home2cComponent,
    AdminCComponent,
    Admin1cComponent,
    Admin2cComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Module1Module,
    HomeModule,
    AdminModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(tarea)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
