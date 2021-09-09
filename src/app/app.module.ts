import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LugarComponent } from './lugar/lugar.component';


const tarea: Routes=[
  {path: 'jurados',loadChildren:() => import('./jurados/jurados.module').then(m => m.JuradosModule)},
  {path: 'votacion', loadChildren:() => import('./votacion/votacion.module').then(m => m.VotacionModule)},
  {path: 'lugar', component: LugarComponent}




]




  

@NgModule({
  declarations: [
    AppComponent,
    LugarComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(tarea)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
