import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GsbillingService } from 'src/app/gsbilling.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Category_Form: any;
  constructor(
    private fb:FormBuilder,
    private service:GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.Category_Form = this.fb.group({
      category_name:['',Validators.required],
      description:[''],
      admin_id_fk:['']
        
    })
  }
  onsubmit(){
    this.service.post_categoryt(this.Category_Form.value).subscribe(
      (res:any)=>{
        if(res.success){
          console.log(res.message);
        }
        console.log(res)
      }
    )
  }
  
  category_form_reset(){
    this.Category_Form.controls['category'].reset()
    this.Category_Form.controls['Description'].reset()
  }
  
}