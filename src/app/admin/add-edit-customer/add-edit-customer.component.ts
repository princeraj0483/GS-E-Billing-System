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
  Category_Form_reset(){
    this.Customer_Form.reset()
  }
}