import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule  } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CityComponent } from './pages/city/city.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
