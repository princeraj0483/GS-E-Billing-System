import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-ledger',
  templateUrl: './add-edit-ledger.component.html',
  styleUrls: ['./add-edit-ledger.component.css']
})
export class AddEditLedgerComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Ledger_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Ledger_Form = this.fb.group({
      Cash_in_hand:['',Validators.required],
      Deposit_bank:['',Validators.required],
      Closing_amount:['', Validators.required],
      Description:['', Validators.required],
      Gst_No:['',],
      Expense:['',],
      Today_Recived:['',],
      course_date:['',],
        
    })
   
  }
  onsubmit(){
    console.log(this.Ledger_Form.value)
  }
  product_form_rese(){
    this.Ledger_Form.controls['Cash_in_hand'].reset()
    this.Ledger_Form.controls['Deposit_bank'].reset()
    this.Ledger_Form.controls['Closing_amount'].reset()
    this.Ledger_Form.controls['Description'].reset()
    this.Ledger_Form.controls['Gst_No'].reset()
    this.Ledger_Form.controls['Expense'].reset()
    this.Ledger_Form.controls['Today_Recived'].reset()
    this.Ledger_Form.controls['course_date'].reset()
  }
}