import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=>import('./buyer/buyer.module').then(b=>b.BuyerModule)
  },
  {
    path : "seller",
    loadChildren : ()=>import('./seller/seller.module').then(s=>s.SellerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
