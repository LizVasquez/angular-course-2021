import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AuthService} from "../../core/services/auth.service";
import { PublicationService } from '../shared/services/publication.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private publicationService: PublicationService,
              private matDialog: MatDialog,
              private authService: AuthService) { }

  ngOnInit(): void {
    const id = this.authService.getUserId();
    console.log('ID',id)
    if(id){
    this.publicationService.getAllById(id).subscribe(
      res => {
        console.log('PROFILE', res);
      }
    )
  }

}
}
