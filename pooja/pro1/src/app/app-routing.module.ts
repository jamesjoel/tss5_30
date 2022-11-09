import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import { HelpUsComponent } from './help-us/help-us.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { Event3Component } from './event3/event3.component';
import { Event4Component } from './event4/event4.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "help",
    component:HelpUsComponent
  },
  {
    path :"event1",
    component : Event1Component
  },
  {
    path:"event2",
    component : Event2Component
  },
  {
    path:"event3",
    component : Event3Component
  },
  {
    path:"event4",
    component : Event4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
