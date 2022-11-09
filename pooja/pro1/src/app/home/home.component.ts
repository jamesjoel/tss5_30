import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  a=0;
  counter(){
    console.log(this.a++)
  };
  inc(){
    console.log(this.a++)
  };
  dec(){
    console.log(this.a--)
  }
  

}
