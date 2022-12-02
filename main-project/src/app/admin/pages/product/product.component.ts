import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm : FormGroup;
  checkForm = false;
  allCategory : any;

  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _pro : ProductService,
    private _actRoute : ActivatedRoute,
    private _cate : CategoryService
  ) {
    this.productForm = this._fb.group({
      title : ["", Validators.required],
      price : [null, Validators.required],
      category : ["", Validators.required],
      detail : ["", Validators.required],
      discount : [null, Validators.required],
      feature : [""]
    })

    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.productForm.invalid){
      this.checkForm = true;
      return;
    }
    this._pro.addProduct(this.productForm.value).subscribe(result=>{
      // console.log(result);
      this._router.navigate(["/admin/product/list"]);
    })
  }

}
