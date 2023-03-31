import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GsbillingService } from 'src/app/gsbilling.service';


@Component({
  selector: 'app-add-edit-weight',
  templateUrl: './add-edit-weight.component.html',
  styleUrls: ['./add-edit-weight.component.css']
})
export class AddEditWeightComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Weight_Form: any;
  private _Form: any;
  constructor(
    private fb:FormBuilder,
    private service:GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.Weight_Form = this.fb.group({
      weight:['',Validators.required],
      description:[],
      admin_id_fk:[]
        
    })
  }
  onsubmit(){
    this.service.post_weight(this.Weight_Form.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }
  
  weight_data_reset(){
    // this.Weight_Form.reset()
    this.Weight_Form.controls['Weight'].reset()
    this.Weight_Form.controls['Description'].reset()
  }
}
