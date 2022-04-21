import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from '../../../interfaces/Client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client;
  successMessage: string;
  errorMessage: string;

  constructor(private clientService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.clientService
      .index()
      .subscribe((response) => (this.clients = response));
  }

  newClient() {
    this.router.navigate(['/clients-form']);
  }

  deleteModal(client: Client) {
    this.selectedClient = client;
  }

  deleteClient() {
    this.clientService.delete(this.selectedClient).subscribe(
      (response) => {
        (this.successMessage = 'Client deleted successfully!'), this.ngOnInit();
      },
      (error) => {
        this.errorMessage = 'There was a error while deleting Client!';
      }
    );
  }
}
