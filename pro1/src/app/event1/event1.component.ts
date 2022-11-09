import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {

  a = "red";
  h = 200;
  w = 200;

  constructor() { }

  ngOnInit(): void {
  }

  demo1(){
    console.log("click event");
  }
  demo2(){
    console.log("dbl - click event");
  }
  demo3(){
    console.log("right button click");
    return false;
  }

  demo4(){
    this.a = "green";
  }

  demo5(){
    this.h++;
    this.w++;
  }
  demo6(){
    this.a = "blue";
  }
}

