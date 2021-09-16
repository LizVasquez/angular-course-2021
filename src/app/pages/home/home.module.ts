import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoryComponent } from './components/story/story.component';
import { PublicationService } from '../shared/services/publication.service';
import {MessageSenderModule} from "../../shared/modules/message-sender/message-sender.module";
import {PostModule} from "../../shared/modules/post/post.module";
import {SharedMaterialModule} from "../../shared/shared-material.module";

const routes: Routes= [
  {path: '', component: HomeComponent}

]

@NgModule({
  declarations: [
   HomeComponent,
   SidebarComponent,
   StoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    PostModule,
    MessageSenderModule
    
  ],
  providers: [
    PublicationService
    
  ]
})
export class HomeModule { }
