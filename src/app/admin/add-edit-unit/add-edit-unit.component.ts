import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { GsbillingService } from 'src/app/gsbilling.service';

@Component({
  selector: 'app-add-edit-unit',
  templateUrl: './add-edit-unit.component.html',
  styleUrls: ['./add-edit-unit.component.css']
})
export class AddEditUnitComponent implements OnInit {
  hide = true;
  unit_id = 1
  FromBuilder: any;
  Unit_Form: any;
  actionBtn:string ='Add'
  
  constructor(
    private matDialog:MatDialog,
    private fb:FormBuilder,
    private service:GsbillingService,
    @Inject(MAT_DIALOG_DATA) public edit_data :any
  ){}
  ngOnInit(): void {
    this.Unit_Form = this.fb.group({
      unit_id:[''],
      admin_id_fk:['1'],
      name:['',Validators.required],
      description:['']
        
    })
    if(this.edit_data){
      console.log(this.edit_data)
      this.actionBtn ="Update";
      this.Unit_Form.controls['unit_id'].setValue(this.edit_data.unit_id);
      this.Unit_Form.controls['description'].setValue(this.edit_data.description);
      this.Unit_Form.controls['name'].setValue(this.edit_data.name);

    }
  } 
  onsubmit(){
    this.service.post_unit(this.Unit_Form.value).subscribe(
      (res:any)=>{
        console.log(res)
        this.matDialog.closeAll();
      }
    )
  }
  
  unit_form_reset(){
    this.Unit_Form.reset()
  } 
}
