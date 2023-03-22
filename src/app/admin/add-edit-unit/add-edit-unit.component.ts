import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-unit',
  templateUrl: './add-edit-unit.component.html',
  styleUrls: ['./add-edit-unit.component.css']
})
export class AddEditUnitComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Unit_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Unit_Form = this.fb.group({
      Name:['',Validators.required],
      Description:[''],
        
    })
  } 
  onsubmit(){
    console.log(this.Unit_Form.value)
  }
  unit_form_reset(){
    this.Unit_Form.controls['Name'].reset()
    this.Unit_Form.controls['Description'].reset()
    
  } 
}
