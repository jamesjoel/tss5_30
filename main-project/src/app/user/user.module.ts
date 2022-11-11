import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
