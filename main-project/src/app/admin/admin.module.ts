import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CityComponent } from './pages/city/city.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { BoxComponent } from './shared/box/box.component';
import { Demo1Component } from './pages/demo1/demo1.component';
import { H1Component } from './shared/h1/h1.component';
import { Demo2Component } from './pages/demo2/demo2.component';
import { Box2Component } from './shared/box2/box2.component';
import { DeletePopupComponent } from './shared/delete-popup/delete-popup.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CityComponent,
    CategoryComponent,
    CategoryListComponent,
    LoginComponent,
    ProductComponent,
    ProductListComponent,
    BoxComponent,
    Demo1Component,
    H1Component,
    Demo2Component,
    Box2Component,
    DeletePopupComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
