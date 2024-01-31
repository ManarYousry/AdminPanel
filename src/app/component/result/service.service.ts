import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private httpClient: HttpClient) { }


  getLists(): Observable<any> {
    return this.httpClient.get<any>(`https://cdn.jsdelivr.net/gh/Swimlane/angular-data-table@master/demos/data/complex-100000.json`);
  }
}
