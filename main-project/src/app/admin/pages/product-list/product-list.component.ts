import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProduct:any=[];
  product:any;
  constructor(
    private _pro : ProductService
  ) {
    this._pro.getProduct().subscribe(result=>{
      this.allProduct = result;
    })
   }

  ngOnInit(): void {
  }
  askDelete(obj:any){
    this.product = obj;
  }
  confDelete(btn:any){
    this._pro.deleteProduct(this.product).subscribe(result=>{
      let n = this.allProduct.indexOf(this.product);
      this.allProduct.splice(n, 1);
      btn.click();
    })
  }

}
