import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any=[];
  a:boolean = false;
  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  show(){
    this.a = true;
    this._http.get<any>("https://jsonplaceholder.typicode.com/users").subscribe(result=>{
      console.log(result);
      this.users = result;
      this.a = false;
    })
  }
}
