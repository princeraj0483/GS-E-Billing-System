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
  Expence_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Expence_Form = this.fb.group({
     
        
    })
    throw new Error('Method not implemented.');
  }
  
}
