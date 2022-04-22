import { Component, OnInit } from '@angular/core';
import { ClientType } from '../../../interfaces/ClientType';
import { ServiceType } from '../../../interfaces/ServiceType';
import { ClientsService } from '../../../services/clients.service';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css'],
})
export class ServicesFormComponent implements OnInit {
  clients: ClientType[] = [];
  service: ServiceType;

  success: boolean = false;
  errors: String[];

  constructor(
    private clientService: ClientsService,
    private serviceService: ServiceService
  ) {
    this.service = new ServiceType();
  }

  ngOnInit(): void {
    this.clientService
      .index()
      .subscribe((response) => (this.clients = response));
  }

  onSubmit() {
    this.serviceService.save(this.service).subscribe(
      (response) => {
        this.success = true;
        this.errors = null;
        this.service = new ServiceType();
      },
      (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }
}
