import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

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
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Product_Form = this.fb.group({
      Unit:['',Validators.required],
      Quantity:['',Validators.required],
      address:['', Validators.required],
      Description:['', Validators.required],
      Gst_No:['',]
        
    })
   
  }
  onsubmit(){
   console.log(this.Product_Form.value)
  }
  product_form_rese(){
    this.Product_Form.controls['Unit'].reset()
    this.Product_Form.controls['Quantity'].reset()
    this.Product_Form.controls['address'].reset()
    this.Product_Form.controls['Description'].reset()
    this.Product_Form.controls['Gst_No'].reset()

  }
}