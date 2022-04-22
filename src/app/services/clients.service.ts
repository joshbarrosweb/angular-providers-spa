import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClientType } from '../interfaces/ClientType';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiURL: string = environment.apiURLBase + '/api/clients';

  constructor(private httpClient: HttpClient) {}

  index(): Observable<ClientType[]> {
    return this.httpClient.get<ClientType[]>(`${this.apiURL}`);
  }

  findById(id: number): Observable<ClientType> {
    return this.httpClient.get<any>(`${this.apiURL}/${id}`);
  }

  save(client: ClientType): Observable<ClientType> {
    return this.httpClient.post<ClientType>(`${this.apiURL}`, client);
  }

  update(client: ClientType): Observable<any> {
    return this.httpClient.put<ClientType>(
      `${this.apiURL}/${client.id}`,
      client
    );
  }

  delete(client: ClientType): Observable<any> {
    return this.httpClient.delete<ClientType>(`${this.apiURL}/${client.id}`);
  }
}
