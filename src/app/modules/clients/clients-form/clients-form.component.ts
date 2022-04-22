import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { ClientType } from '../../../interfaces/ClientType';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent implements OnInit {
  client: ClientType;

  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.client = new ClientType();
  }

  ngOnInit(): void {
    let params: Observable<any> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.clientService
          .findById(this.id)
          .subscribe(
            (response) => (
              (this.client = response),
              (errorResponse) => (this.client = new ClientType())
            )
          );
      }
    });
  }

  returnToList() {
    this.router.navigate(['/clients-list']);
  }

  onSubmit() {
    if (this.id) {
      this.clientService.update(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ['There was a error while trying to update Client'];
        }
      );
    } else {
      this.clientService.save(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.client = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      );
    }
  }
}
