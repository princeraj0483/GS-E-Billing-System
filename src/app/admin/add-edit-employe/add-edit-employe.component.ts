import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

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
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Employee_Form = this.fb.group({
      Name:['',Validators.required],
      Email_Id:['',Validators.required],
      Mobile:['', Validators.required],
      Whatsapp_number:['', Validators.required],
      Whatsapp:['', Validators.required],
      mobile_number:['', Validators.required],
      Account_holder_name:['',],
      Account_number:['',],
      Ifsc:['',],
      Email_id:['',],
      Adharfront:['',],
      AdharBack:['',],
      Description:['', Validators.required] 
        
    })
  }
  onsubmit(){
    console.log(this.Employee_Form. value)
  }
  employee_form_reset(){
    this.Employee_Form.controls['Name'].reset()
  }
}