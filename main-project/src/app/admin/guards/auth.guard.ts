import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router : Router,
    private _auth : AuthService
  ){

  }
  canActivate(){
    if(this._auth.isAdminLoggin()){
      return true;
    }else{
      this._router.navigate(["/"]);
      return false;
    }
  }
  
}
