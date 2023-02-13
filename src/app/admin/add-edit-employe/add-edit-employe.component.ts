import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-employe',
  templateUrl: './add-edit-employe.component.html',
  styleUrls: ['./add-edit-employe.component.css']
})
export class AddEditEmployeComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  ShopForm: any;
  ngOnInit(): void {
    this.ShopForm = this.FromBuilder.group({
    Emp_name: ['', Validators.required],
    Emp_Id: ['', Validators.required],
    Emp_Mob: ['', Validators.required],
    Emp_whatsapp: [''],
    Emp_Status:['']
  
    })
    throw new Error('Method not implemented.');
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}