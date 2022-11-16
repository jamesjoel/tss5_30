import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http : HttpClient
  ) { }

  addCategory(obj:any){
    return this._http.post<any>("http://localhost:3000/api/category", obj);
  }
  getCategory(){
    return this._http.get<any>("http://localhost:3000/api/category");
  }
}
