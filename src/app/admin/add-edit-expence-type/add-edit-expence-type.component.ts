import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-expence-type',
  templateUrl: './add-edit-expence-type.component.html',
  styleUrls: ['./add-edit-expence-type.component.css']
})
export class AddEditExpenceTypeComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  ShopForm: any;
  Expence_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Expence_Form = this.fb.group({
      Expence_type:['', Validators.required],
      Description:['',Validators.required]
        
    })
 
  }
  onsubmit(){
    console.log(this.Expence_Form.get('Expence_type')?.value)
    console.log(this.Expence_Form.get('Description')?.value)
  }
  expence_reset_form(){
    this.Expence_Form.controls['Description'].reset()
  }

}