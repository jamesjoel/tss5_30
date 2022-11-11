import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  demo1(){
    console.log("keypress")
  }
  demo2(){
    console.log("keyup")
  }
  color="red"
  demo3(){
    this.color="grey"
  }
  demo4(){
    this.color="green"
  }
  demo5(){
    console.log("change")
  }

}
