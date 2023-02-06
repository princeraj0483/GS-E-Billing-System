import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-expence',
  templateUrl: './add-edit-expence.component.html',
  styleUrls: ['./add-edit-expence.component.css']
})
export class AddEditExpenceComponent implements OnInit {

  hide = true;
  FromBuilder: any;
  ShopForm: any;
  ngOnInit(): void {
    this.ShopForm = this.FromBuilder.group({
    Cate_name: ['', Validators.required],
    Cate_photo: [''],
  
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