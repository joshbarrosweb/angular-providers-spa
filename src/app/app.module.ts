import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './modules/template/template.module';
import { HomeComponent } from './modules/home/home.component';
import { ClientsModule } from './modules/clients/clients.module';
import { ClientsService } from './services/clients.service';
import { ServicesModule } from './modules/services/services.module';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServicesModule,
  ],
  providers: [ClientsService, ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
