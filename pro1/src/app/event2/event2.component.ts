import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {

  a = "white";
  constructor() { }

  ngOnInit(): void {
  }

  demo1(){
    console.log("key down");
  }
  demo2(){
    console.log("key up");
  }
  demo3(){
    this.a = "blue";
  }
  demo4(){
    this.a = "yellow";
  }

  demo5(){
    console.log("************");
  }
  demo6(){
    console.log("COPY---------");
  }
  demo7(){
    console.log("PASTE --------- ");
  }
}
