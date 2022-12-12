import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { AuthGuard } from './guards/auth.guard';
import { AntiAuthGuard } from './guards/anti-auth.guard';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children : [
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
        path : "signup",
        component : SignupComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : "login",
        component : LoginComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : "my-account",
        component : MyAccountComponent,
        canActivate :[AuthGuard]
      },
      {
        path : "my-profile",
        component : MyProfileComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "my-profile/update",
        component : UpdateProfileComponent,
        canActivate : [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
