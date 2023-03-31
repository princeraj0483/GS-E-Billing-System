import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GsbillingService } from 'src/app/gsbilling.service';

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
    private fb:FormBuilder,
    private service:GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.Unit_Form = this.fb.group({
      admin_id_fk:[''],
      name:['',Validators.required],
      description:[''],
        
    })
  } 
  onsubmit(){
    this.service.post_gst(this.Unit_Form.value).subscribe(
      (res:any)=>{
        alert('data successfully...')
      },
      (error)=>{
        alert('data not insert')
      }
    )
  }
  
  unit_form_reset(){
    this.Unit_Form.controls['Name'].reset()
    this.Unit_Form.controls['Description'].reset()
    
  } 
}
