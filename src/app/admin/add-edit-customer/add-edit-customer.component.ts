import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Customer_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Customer_Form = this.fb.group({
      Customer_name:['', Validators.required],
      State:['', Validators.required],
      Whatsapp_No:['', Validators.required],
      Email_Id:['',],
      Address:['',],
      Description:['',]
  
        
    })
  }
  onsubmit(){
    console.log(this.Customer_Form.get('Customer_name')?.value)
    console.log(this.Customer_Form.get('State')?.value)
    console.log(this.Customer_Form.get('Whatsapp_No')?.value)
    console.log(this.Customer_Form.get('Email_Id')?.value)
    console.log(this.Customer_Form.get('Address')?.value)
    console.log(this.Customer_Form.get('Description')?.value)
  }
  Category_Form_reset(){
    this.Customer_Form.controls['Customer_name'].reset()
    this.Customer_Form.controls['State'].reset()
    this.Customer_Form.controls['Whatsapp_No'].reset()
    this.Customer_Form.controls['Email_Id'].reset()
    this.Customer_Form.controls['Address'].reset()
    this.Customer_Form.controls['Description'].reset()
  }
}