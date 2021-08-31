import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {

  constructor(private router:ActivatedRoute) {

   }

  ngOnInit(): void {

    //clase 26 de agosto

    /*this.router.params.subscribe(p=>{
      console.log('PARAMS',p);
    });

    //para escuchar a los queryparams
    this.router.queryParams.subscribe(q => {
      console.log('QUERY PARAMS', q);
    })*/

    console.log('SNAPSHOT',this.router.snapshot.params);
    console.log('SNAPSHOT QUERY PARAMS',this.router.snapshot.queryParams);
    
  }

}
