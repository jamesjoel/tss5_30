import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  demo1(){
    console.log("click")
  }
  demo2(){
    console.log("double click")
  }
  demo3(){
    console.log("right click")
  }
color ="red";
h = 200;
w=200;
demo4(){
  this.color="green"
}
demo5(){
  this.h++;
  this.w++;
}
demo6(){
  this.color="red"
}
}
