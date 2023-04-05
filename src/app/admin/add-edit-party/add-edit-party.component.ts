import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GsbillingService } from 'src/app/gsbilling.service';

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
    private matDialog:MatDialog,
    private fb:FormBuilder,
    private service:GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.Party_Form = this.fb.group({
      admin_id_fk:[''],
      party_name:['',Validators.required],
      contact_persion:[''],
      mobile_no:['', Validators.required],
      email_Id:['',],
      ac_holder_name:[''],
      account_number:[''],
      ifsc:[''],
      gst_No:[''],
      address:['', Validators.required],
      whatsapp:['']   
    })
  }
  onsubmit(){
    this.service.post_party(this.Party_Form.value).subscribe(
      (res:any)=>{
        if(res.success){
          console.log(res.message);
          this.matDialog.closeAll();
        }
        console.log(res)
      }
    )
  }

  party_data_reset(){
    this.Party_Form.reset()
  }
}