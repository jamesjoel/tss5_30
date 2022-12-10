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

  id : any;
  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _pro : ProductService,
    private _actRoute : ActivatedRoute,
    private _cate : CategoryService
  ) {
    this.productForm = this._fb.group({
      _id : null,
      __v : null,
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

    this.id = this._actRoute.snapshot.paramMap.get("id");
    if(this.id){
      this._pro.getProductById(this.id).subscribe(result=>{
        this.productForm.setValue(result);
      })
    }

    
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.productForm.invalid){
      this.checkForm = true;
      return;
    }
    if(this.id){
      this._pro.upateProduct(this.id, this.productForm.value).subscribe(result=>{

        this._router.navigate(["/admin/product/list"]);
      })
    }else{

      this._pro.addProduct(this.productForm.value).subscribe(result=>{
        // console.log(result);
        this._router.navigate(["/admin/product/list"]);
      })
    }
  }

}
