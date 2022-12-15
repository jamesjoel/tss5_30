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
    
    return this._http.get<any>("http://localhost:3000/api/userprofile", {headers : this.generateHead()});
  }

  changePassword(obj:any){
    return this._http.post<any>("http://localhost:3000/api/userprofile/updatepassword", obj, {headers : this.generateHead()})
  }

  generateHead(){
    let token = localStorage.getItem("token");
    let head = new HttpHeaders().set('Authorization', JSON.stringify(token));
    return head;
  }
}



/*

{ name : "rohit", age : 25 }

'{'name' : "rohit", 'age' : 25 }'


*/