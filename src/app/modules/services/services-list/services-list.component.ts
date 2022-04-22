import { Component, OnInit } from '@angular/core';
import { ServiceSearchType } from '../../../interfaces/ServiceSearchType';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
})
export class ServicesListComponent implements OnInit {
  name: string;
  month: number;
  months: number[];
  list: ServiceSearchType[];
  message: string;

  constructor(private serviceService: ServiceService) {
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {}

  search() {
    this.serviceService.search(this.name, this.month).subscribe((response) => {
      this.list = response;

      if (this.list.length <= 0) {
        this.message = 'No Record Found.';
      } else {
        this.message = null;
      }
    });
  }
}
