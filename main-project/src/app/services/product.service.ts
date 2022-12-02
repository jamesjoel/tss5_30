import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:3000/api/product/";
  constructor(
    private _http : HttpClient
  ) { }

  addProduct(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
  getProduct(){
    return this._http.get<any>(this.apiUrl);
  }
  deleteProduct(obj:any){
    return this._http.delete<any>(this.apiUrl+obj._id);
  }
  getProductById(id:any){
    return this._http.get<any>(this.apiUrl+id);
  }
  upateProduct(id:any, obj:any){
    return this._http.put<any>(this.apiUrl+id, obj);
  }
}
