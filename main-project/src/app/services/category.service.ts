import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "http://localhost:3000/api/category/";
  constructor(
    private _http : HttpClient
  ) { }

  addCategory(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
  getCategory(){
    return this._http.get<any>(this.apiUrl);
  }
  deleteCategory(obj:any){
    return this._http.delete<any>(this.apiUrl+obj._id);
  }
  getCategoryById(id:any){
    return this._http.get<any>(this.apiUrl+id);
  }
  upateCategroy(id:any, obj:any){
    return this._http.put<any>(this.apiUrl+id, obj);
  }
}
