import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from '../interfaces/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private httpClient: HttpClient) {}

  index(): Observable<Client[]> {
    return this.httpClient.get<Client[]>('http://localhost:8090/api/clients');
  }

  findById(id: number): Observable<Client> {
    return this.httpClient.get<any>(`http://localhost:8090/api/clients/${id}`);
  }

  save(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(
      'http://localhost:8090/api/clients',
      client
    );
  }

  update(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(
      `http://localhost:8090/api/clients/${client.id}`,
      client
    );
  }

  delete(client: Client): Observable<any> {
    return this.httpClient.delete<Client>(
      `http://localhost:8090/api/clients/${client.id}`
    );
  }
}
