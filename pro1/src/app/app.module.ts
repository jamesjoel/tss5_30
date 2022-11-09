import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { MiniBoxComponent } from './mini-box/mini-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


import { AboutComponent } from './about/about.component';



import { ContactComponent } from './contact/contact.component';
import { HelpusComponent } from './helpus/helpus.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { Event3Component } from './event3/event3.component';
import { Event4Component } from './event4/event4.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    MiniBoxComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelpusComponent,
    Event1Component,
    Event2Component,
    Event3Component,
    Event4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
