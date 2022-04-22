import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes = [
  { path: 'services-form', component: ServicesFormComponent },
  { path: 'services-list', component: ServicesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
