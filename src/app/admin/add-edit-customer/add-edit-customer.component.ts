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
      Customer_Name:['',Validators.required],
      Email_Id:['', Validators.required],
      State:['', Validators.required],
      Active_Status:['',Validators.required],
      number:['', Validators.required],
      Address:['', Validators.required],
      Whatsapp:['', Validators.required],
      mobile_number:['',Validators.required],
      Password:['', Validators.required]
        
    })
  }
}