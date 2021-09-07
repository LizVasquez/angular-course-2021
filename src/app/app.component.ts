import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { NoVacunadosService } from './services/no-vacunados.service';
import { VacunadosService } from './services/vacunados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vacunados = [];
  noVacunados = [];
  subsVacunados: Subscription;
  subsNoVacunados: Subscription;

constructor(private noVacunadosService: NoVacunadosService,
            private vacunadosService: VacunadosService){}


ngOnInit(){
 this.datosVacunados();
 this.datosNoVacunados();
}


datosVacunados(){
  this.vacunados=[];
  this.subsVacunados = this.vacunadosService.listVacunados().subscribe(data => {
    Object.entries(data).map((d:any) =>
    this.vacunados.push({id: d[0],...d[1]})
    );
  });
}

datosNoVacunados(){
  this.noVacunados=[];
  this.subsNoVacunados = this.noVacunadosService.listNoVacunados().subscribe(data => {
    Object.entries(data).map((d: any) =>
    this.noVacunados.push({id: d[0],...d[1]})
    );
  });

}



}







