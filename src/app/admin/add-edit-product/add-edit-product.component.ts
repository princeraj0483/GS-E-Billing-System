import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GsbillingService } from 'src/app/gsbilling.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Product_Form: any;
  constructor(
    private fb:FormBuilder,
    private service:GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.Product_Form = this.fb.group({
      category:[''],
      quantity:['',Validators.required],
      hsn_code:['',Validators.required],
      weight:['', Validators.required],
      unit:['', Validators.required],
      size:[''],
      rate:[''],
      Description:[''],
      admin_id_fk:['1']
        
    })
   
  }
  onsubmit(){
    this.service.post_product(this.Product_Form.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
      
    )
  }
  
  product_form_reset(){
    this.Product_Form.controls['Unit'].reset()
    this.Product_Form.controls['Quantity'].reset()
    this.Product_Form.controls['address'].reset()
    this.Product_Form.controls['Description'].reset()
    this.Product_Form.controls['Gst_No'].reset()

  }
}