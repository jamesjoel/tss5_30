import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewOrdersComponent } from './pages/view-orders/view-orders.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
  {
    path : "",
    component : SellerComponent,
    children : [
      {
        path : "dashboard",
        component : DashboardComponent
      },
      {
        path : "add-product",
        component : AddProductComponent
      },
      {
        path : "view-order",
        component : ViewOrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
