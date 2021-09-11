import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './login/services/auth.service';






const routes: Routes=[
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', loadChildren: ()=>
    import('./login/login.module').then(m => m.LoginModule)},
  
  {path: 'pages', loadChildren: ()=>
    import('./pages/pages.module').then(m => m.PagesModule)}

]
    

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
   
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
