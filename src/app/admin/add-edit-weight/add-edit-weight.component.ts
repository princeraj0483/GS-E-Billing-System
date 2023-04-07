import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GsbillingService } from 'src/app/gsbilling.service';


@Component({
  selector: 'app-add-edit-weight',
  templateUrl: './add-edit-weight.component.html',
  styleUrls: ['./add-edit-weight.component.css']
})
export class AddEditWeightComponent implements OnInit {
  hide = true;
  weight_id = 1;
  FromBuilder: any;
  Weight_Form: any;
  actionBtn: string ="save"
  edit_weight: any;
  
  constructor(
    private fb:FormBuilder,
    private service:GsbillingService,
    @Inject(MAT_DIALOG_DATA) public edit_data :any
  ){

  }
  ngOnInit(): void {
    this.Weight_Form = this.fb.group({
      weight:['',Validators.required],
      description:[],
      admin_id_fk:[]
        
    })
    if(this.edit_data){
      console.log(this.edit_data)
      this.actionBtn ="Update";
      this.Weight_Form.controls['	weight_id'].setValue(this.edit_data. weight_id);
      this.Weight_Form.controls['weight'].setValue(this.edit_data.weight);
      this.Weight_Form.controls['description'].setValue(this.edit_data.description);

    }
  } 
  onsubmit(){
    if (!this.edit_weight){
    this.service.post_weight(this.Weight_Form.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
    }
    else{
      this.updateWeight()
    }
  }
  updateWeight() {
    throw new Error('Method not implemented.');
  }
  
  weight_data_reset(){
    // this.Weight_Form.reset()
    this.Weight_Form.controls['Weight'].reset()
    this.Weight_Form.controls['Description'].reset()
  }
}
