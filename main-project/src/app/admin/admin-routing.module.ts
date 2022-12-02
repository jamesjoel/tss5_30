import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { CityComponent } from './pages/city/city.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AntiAuthGuard } from './guards/anti-auth.guard';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';



const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : LoginComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : "dashboard",
        component :DashboardComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "city",
        component : CityComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "category",
        component : CategoryComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "category/list",
        component : CategoryListComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "category/edit/:id",
        component : CategoryComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "product",
        component : ProductComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "product/list",
        component : ProductListComponent,
        canActivate : [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
