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
  deleteCategory(obj:any){
    return this._http.delete<any>("http://localhost:3000/api/category/"+obj._id);
  }
  getCategoryById(id:any){
    return this._http.get<any>("http://localhost:3000/api/category/"+id);
  }
  upateCategroy(id:any, obj:any){
    return this._http.put<any>("http://localhost:3000/api/category/"+id, obj);
  }
}
