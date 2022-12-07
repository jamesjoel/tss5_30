import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css']
})
export class H1Component implements OnInit {

  @Input() a:any;
  @Input() b:any;

  constructor() { }

  ngOnInit(): void {
  }

}
