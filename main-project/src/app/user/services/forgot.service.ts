import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(
    private _http : HttpClient
  ) { }

  checkUsername(obj:any){
    return this._http.post<any>("http://localhost:3000/api/forgotpassword", obj);
  }
  checkOtp(obj:any){
    return this._http.post<any>("http://localhost:3000/api/forgotpassword/checkotp", obj);
  }
}
