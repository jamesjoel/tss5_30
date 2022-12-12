import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http : HttpClient
  ) { }

  getUserProfile(){
    let token = localStorage.getItem("token");
    let head = new HttpHeaders().set('Authorization', JSON.stringify(token));
    return this._http.get<any>("http://localhost:3000/api/userprofile", {headers : head});
  }
}



/*

{ name : "rohit", age : 25 }

'{'name' : "rohit", 'age' : 25 }'


*/