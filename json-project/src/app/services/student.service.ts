import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = "http://localhost:3000/student/";
  constructor(
    private _http : HttpClient
  ) { }

  addStudent(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
  getStudent(){
    return this._http.get<any>(this.apiUrl);
  }
  getStudentById(id:any){
    return this._http.get<any>(this.apiUrl+id);
  }
  deleteStudent(id:any){
    return this._http.delete<any>(this.apiUrl+id);
  }
  updateStudent(id:any, obj:any){
    return this._http.put<any>(this.apiUrl+id, obj);
  }
}
