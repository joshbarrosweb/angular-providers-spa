import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesListComponent } from './services-list/services-list.component';

@NgModule({
  declarations: [ServicesFormComponent, ServicesListComponent],
  imports: [CommonModule, ServicesRoutingModule, FormsModule, RouterModule],
  exports: [ServicesFormComponent, ServicesListComponent],
})
export class ServicesModule {}
