import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-gst',
  templateUrl: './add-edit-gst.component.html',
  styleUrls: ['./add-edit-gst.component.css']
})
export class AddEditGstComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Gst_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Gst_Form = this.fb.group({
      Gst:['',Validators.required],
      Sgst:[],
        
    })
  }
  onsubmit(){
    console.log(this.Gst_Form.value)
  }
  gst_form_reset(){
    this.Gst_Form.controls['Gst'].reset()
    this.Gst_Form.controls['Sgst'].reset()
  }
}