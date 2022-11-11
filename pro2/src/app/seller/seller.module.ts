import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ViewOrdersComponent } from './pages/view-orders/view-orders.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SellerComponent } from './seller.component';


@NgModule({
  declarations: [
    AddProductComponent,
    ViewOrdersComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SellerComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
