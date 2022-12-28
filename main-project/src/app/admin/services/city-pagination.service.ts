import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityPaginationService {

  constructor(
    private _http : HttpClient
  ) { }

  getTotalCity(){
    return this._http.get<any>("http://localhost:3000/api/city/totalcity");
  }

  getRecord(rec:any, skip:any){
    return this._http.get<any>("http://localhost:3000/api/city/pagination/"+rec+"/"+skip);
  }
}
