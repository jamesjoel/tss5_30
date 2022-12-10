import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { NewArrivalComponent } from './shared/new-arrival/new-arrival.component';
import { WatchChoiceComponent } from './shared/watch-choice/watch-choice.component';
import { InfoComponent } from './shared/info/info.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ProductBoxComponent } from './shared/product-box/product-box.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SliderComponent,
    NewArrivalComponent,
    WatchChoiceComponent,
    InfoComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    MyAccountComponent,
    ProductBoxComponent,
    MyProfileComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
