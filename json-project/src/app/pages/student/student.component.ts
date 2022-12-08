import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stuForm : FormGroup;
  checkForm = false;
  id:any;
  constructor(
    private _fb : FormBuilder,
    private _stu : StudentService,
    private _router : Router,
    private _actRoute : ActivatedRoute
  ) {

    this.id = this._actRoute.snapshot.paramMap.get("id");

    

    this.stuForm = this._fb.group({
      id : null,
      name : ["",Validators.required],
      age : [null, Validators.required],
      city : ["", Validators.required]
    })


    if(this.id){
      this._stu.getStudentById(this.id).subscribe(result=>{
        this.stuForm.setValue(result);
      })
    }
   }

  ngOnInit(): void {
  }
  submit(){
    if(this.stuForm.invalid){
      this.checkForm = true;
      return;
    }
    if(this.id){
      this._stu.updateStudent(this.id, this.stuForm.value).subscribe(result=>{
        this._router.navigate(["/student/list"])
      })
    }else{

      this._stu.addStudent(this.stuForm.value).subscribe(result=>{
        // console.log(result);
        this._router.navigate(["/student/list"])
      })
    }


  }

}
