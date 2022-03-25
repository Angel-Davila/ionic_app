import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiconsumerService {

  serviceURL = 'http://localhost:8080/api/';
  HttpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private http: HttpClient) { }

  public test() {
    try {
      return this.http.get(this.serviceURL+'get');
    } catch (error) {
      console.log(error);
      
    }
  }
}
