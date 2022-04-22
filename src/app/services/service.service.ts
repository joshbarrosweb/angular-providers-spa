import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ServiceSearchType } from '../interfaces/ServiceSearchType';

import { ServiceType } from '../interfaces/ServiceType';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  apiURL: string = environment.apiURLBase + '/api/services';

  constructor(private httpClient: HttpClient) {}

  save(service: ServiceType): Observable<ServiceType> {
    return this.httpClient.post<ServiceType>(this.apiURL, service);
  }

  search(name: string, month: number): Observable<ServiceSearchType[]> {
    const httpParams = new HttpParams()
      .set('name', name ? name : '')
      .set('month', month ? month.toString() : '');

    const url = this.apiURL + '?' + httpParams.toString();

    return this.httpClient.get<any>(url);
  }
}
