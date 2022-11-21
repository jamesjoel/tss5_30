import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { CityComponent } from './pages/city/city.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : DashboardComponent
      },
      {
        path : "city",
        component : CityComponent
      },
      {
        path : "category",
        component : CategoryComponent
      },
      {
        path : "category/list",
        component : CategoryListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
