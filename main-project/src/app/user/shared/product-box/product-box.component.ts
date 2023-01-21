import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { MyCartService } from 'src/app/services/my-cart.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() pro:any;
  @Output() cartEvent = new EventEmitter();
  cartArr:any=[];
  constructor(
    private _mycart : MyCartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(obj:any){
    this.cartEvent.emit(obj);

    this._mycart.sub.next(5);

  }

}
