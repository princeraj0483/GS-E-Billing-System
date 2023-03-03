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
}