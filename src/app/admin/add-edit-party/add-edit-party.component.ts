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
  party_data_reset(){
    this.Party_Form.reset()
  }
}