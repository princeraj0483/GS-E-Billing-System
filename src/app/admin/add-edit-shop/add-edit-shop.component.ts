import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-shop',
  templateUrl: './add-edit-shop.component.html',
  styleUrls: ['./add-edit-shop.component.css']
})
export class AddEditShopComponent implements OnInit {
  ngOnInit(): void {
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
 
