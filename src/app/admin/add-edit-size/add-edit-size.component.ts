import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GsbillingService } from 'src/app/gsbilling.service';

@Component({
  selector: 'app-add-edit-size',
  templateUrl: './add-edit-size.component.html',
  styleUrls: ['./add-edit-size.component.css']
})
export class AddEditSizeComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  size_Form: any;
  private _Form: any;
  constructor(
    private fb:FormBuilder,
    private service:GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.size_Form = this.fb.group({
      size:['',Validators.required],
      description:[],
      admin_id_fk:[]
        
    })
  }
  onsubmit(){
    this.service.post_size(this.size_Form.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
      
    )
  }
  
  weight_data_reset(){
    // this.Weight_Form.reset()
    this.size_Form.controls['size'].reset()
    this.size_Form.controls['Description'].reset()
  }
}
