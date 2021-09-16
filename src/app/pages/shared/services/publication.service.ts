import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PublicationService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(`${this.url}/publications.json`)
  }

  public create(body:any): Observable<any>{
    return this.http.post(`${this.url}/publications.json`, body);
  }

  public getAllById(id:string){
    return this.http.get(`${this.url}/publications.json?orderBy="idUser"&equalTo="${id}"&print=pretty`)
  }


}
