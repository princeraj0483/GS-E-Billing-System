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
  
}