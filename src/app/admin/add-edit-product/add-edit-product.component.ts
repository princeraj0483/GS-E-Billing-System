import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Product_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Product_Form = this.fb.group({
      Unit:['',Validators.required],
      Quantity:['',Validators.required],
      address:['', Validators.required],
      Description:['', Validators.required],
  
        
    })
   
  }
}