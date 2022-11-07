import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  a = 15;
  b = "indore";

  x = 'rohit';

  constructor() { }

  ngOnInit(): void {
  }

}
