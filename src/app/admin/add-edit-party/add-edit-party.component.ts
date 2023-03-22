import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-party',
  templateUrl: './add-edit-party.component.html',
  styleUrls: ['./add-edit-party.component.css']
})
export class AddEditPartyComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Party_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Party_Form = this.fb.group({
      Name:['',Validators.required],
      Contact_persion:['',Validators.required],
      number:['', Validators.required],
      Email_Id:['',],
      Ac_holder_name:['',],
      Account_number:['',],
      IFSC:['',],
      Gst_No:['',],
      Address:['', Validators.required],
      Whatsapp:['', Validators.required],
      mobile_number:['', Validators.required]
        
    })
  }
  onsubmit(){
    console.log(this.Party_Form.value)
  }
  party_data_reset(){
    // this.Party_Form.reset()
    this.Party_Form.controls['Name'].reset()
    this.Party_Form.controls['Contact_persion'].reset()
    this.Party_Form.controls['number'].reset()
    this.Party_Form.controls['Email_Id'].reset()
    this.Party_Form.controls['Ac_holder_name'].reset()
    this.Party_Form.controls['Account_number'].reset()
    this.Party_Form.controls['IFSC'].reset()
    this.Party_Form.controls['Gst_No'].reset()
    this.Party_Form.controls['Address'].reset()
    this.Party_Form.controls['Whatsapp'].reset()
     this.Party_Form.controls['mobile_number'].reset()
  }
}