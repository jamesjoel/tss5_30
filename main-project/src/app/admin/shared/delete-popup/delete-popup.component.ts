import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent implements OnInit {

  @Input() type:any;
  @Input() obj:any;
  @Output() delEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete(btn:any){
    this.delEvent.emit(btn);
  }

}
