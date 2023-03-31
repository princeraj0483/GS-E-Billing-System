import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-edit-discount',
  templateUrl: './add-edit-discount.component.html',
  styleUrls: ['./add-edit-discount.component.css']
})
export class AddEditDiscountComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Discount_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Discount_Form = this.fb.group({
      Discount:['',Validators.required],
      Description:[],
        
    })
  }
  
  onsubmit(){
    console.log(this.Discount_Form.get('Discount')?.value)
    console.log(this.Discount_Form.get('Description')?.value)
  }

  discount_form_reset(){
    this.Discount_Form.controls['Discount'].reset()
    this.Discount_Form.controls['Description'].reset()
  }
 
}