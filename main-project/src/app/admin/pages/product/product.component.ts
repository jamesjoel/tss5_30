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
      feature : [""],
      image : ["", Validators.required]
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

  submit(photo:any){
    let image = photo.files[0];
    
    if(this.productForm.invalid){
      this.checkForm = true;
     
    }
    if(this.id){
      this._pro.upateProduct(this.id, this.productForm.value).subscribe(result=>{

        this._router.navigate(["/admin/product/list"]);
      })
    }else{

      // console.log(photo.files[0]);
      
      
      let form = new FormData();
      if(image){

      
      if(image.type == "image/jpeg" || image.type == "image/png" || image.type == "image/jpg" || image.type == "image/svg")
      {
        if(image.size <= (1024*1024*2)){
          if(! this.productForm.invalid){

            form.append("data", JSON.stringify(this.productForm.value));
            form.append("image", image);
          
    
            this._pro.addProduct(form).subscribe(result=>{
              // console.log(result);
              this._router.navigate(["/admin/product/list"]);
            })
          }
        }else{
          this.productForm.controls['image'].setErrors({ sizeErr : true });

        }
      }else{
        this.productForm.controls['image'].setErrors({ typeErr : true });
      }

      
      
    }
    }
  }

}
