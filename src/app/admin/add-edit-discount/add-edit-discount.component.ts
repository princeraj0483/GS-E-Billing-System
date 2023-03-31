import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GsbillingService } from 'src/app/gsbilling.service';


@Component({
  selector: 'app-add-edit-discount',
  templateUrl: './add-edit-discount.component.html',
  styleUrls: ['./add-edit-discount.component.css']
})
export class AddEditDiscountComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Discount_Form: any;
  discount_name: any;
  constructor(
    private fb:FormBuilder,
    private service:GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.Discount_Form = this.fb.group({
      discount_name:['',Validators.required],
      description:[''],
      admin_id_fk:['']
        
    })
  }
  
  onsubmit(){
    this.service.post_discount(this.Discount_Form.value).subscribe(
      (res:any)=>{
        if(res.success){
          console.log(res.message);
        }
        console.log(res)
      }
    )
  }
  

  discount_form_reset(){
    this.discount_name.controls['discount'].reset()
    this.discount_name.controls['Description'].reset()
  }
}
