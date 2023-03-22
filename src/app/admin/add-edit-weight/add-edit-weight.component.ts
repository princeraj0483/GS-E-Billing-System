import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';


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
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Weight_Form = this.fb.group({
      Weight:['',Validators.required],
      Description:[],
        
    })
  }
  onsubmit(){
    console.log(this.Weight_Form.value)
  }
  weight_data_reset(){
    // this.Weight_Form.reset()
    this.Weight_Form.controls['Weight'].reset()
    this.Weight_Form.controls['Description'].reset()
  }
}
