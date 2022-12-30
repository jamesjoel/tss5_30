import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  cartArr:any=[];
  constructor(
    private _pro : ProductService
  ) {
    
    // console.log(localStorage.getItem("cart"));
    let cart = localStorage.getItem("cart");
    this.cartArr = cart?.split(",");
    this._pro.getProductByCartArr({ cart : this.cartArr }).subscribe(result=>{
      console.log(result);
    })
   }

  ngOnInit(): void {
  }

}
