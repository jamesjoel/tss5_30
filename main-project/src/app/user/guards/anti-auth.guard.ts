import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AntiAuthGuard implements CanActivate {

  constructor(
    private _auth : AuthService,
    private _router : Router
  ){

  }

  canActivate() {
    if(this._auth.isLoggedIn()){
      this._router.navigate(["/"]);
      return false;
    }else{
      return true;
    }
  }
  
}
