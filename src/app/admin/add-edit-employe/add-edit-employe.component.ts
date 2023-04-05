import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GsbillingService } from 'src/app/gsbilling.service';

@Component({
  selector: 'app-add-edit-employe',
  templateUrl: './add-edit-employe.component.html',
  styleUrls: ['./add-edit-employe.component.css']
})
export class AddEditEmployeComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Employee_Form: any;
  constructor(
    private fb:FormBuilder,
    private service:GsbillingService
  ){

  }
  ngOnInit(): void {
    this.Employee_Form = this.fb.group({
      emp_name:['',Validators.required],
      emp_mobile:['', Validators.required],
      emp_whatsapp_number:['', Validators.required],
      role:[''],
      account_holder_name:['',],
      account_number:['',],
      ifsc:[''],
      active_status:[''],
      email_id:[''],
      adharfront:[''],
      adharBack:[''],
      description:['', Validators.required],
      admin_id_fk:['']
        
    })
  }
  onsubmit(){
    this.service.post_Employee(this.Employee_Form.value).subscribe(
      (res:any)=>{
        if(res.success){
          console.log(res.message);
        }
        console.log(res)
      }
    )
  
    console.log(this.Employee_Form.get('Name')?.value)
    console.log(this.Employee_Form.get('Mobile')?.value)
    console.log(this.Employee_Form.get('Whatsapp_number')?.value)
    console.log(this.Employee_Form.get('Account_holder_name')?.value)
    console.log(this.Employee_Form.get('Account_number')?.value)
    console.log(this.Employee_Form.get('Ifsc')?.value)
    console.log(this.Employee_Form.get('Active_Status')?.value)
    console.log(this.Employee_Form.get('Email_id')?.value)
    console.log(this.Employee_Form.get('Adharfront')?.value)
    console.log(this.Employee_Form.get('AdharBack')?.value)
    console.log(this.Employee_Form.get('Description')?.value)
  }
  employee_form_reset(){
    this.Employee_Form.controls['Name'].reset()
  }
}