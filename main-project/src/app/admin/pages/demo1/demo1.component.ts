import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  color = ["red", "green"];
  name = "rohit";
  tempName:any;
  colorName : any;

  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    this.tempName = this.name;
  }
  add(){
    this.color.push(this.colorName);
    this.colorName = "";
  }
}
