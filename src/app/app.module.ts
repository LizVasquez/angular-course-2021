import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SingletonService } from './login/services/singleton.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { MessageSenderComponent } from './pages/home/components/message-sender/message-sender.component';
import { PostComponent } from './pages/home/components/post/post.component';
import { SidebarComponent } from './pages/home/components/sidebar/sidebar.component';
import { StoryComponent } from './pages/home/components/story/story.component';




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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
