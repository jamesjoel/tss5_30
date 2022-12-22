import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fee = 1500;
  a = new Date();
  name = "Amar";
  para = "hello world";
  constructor() { }

  ngOnInit(): void {
  }

}
