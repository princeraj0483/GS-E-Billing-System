import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  actionBtn: string = "save"
  constructor(
    private fb: FormBuilder,
    private service: GsbillingService,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) {

  }
  ngOnInit(): void {
    this.Party_Form = this.fb.group({
      party_id: [""],
      party_name: ['', Validators.required],
      contact_persion: [''],
      mobile_no: ['', Validators.required],
      email_Id: ['',],
      ac_holder_name: [''],
      account_number: [''],
      ifsc: [''],
      gst_No: [''],
      address: ['', Validators.required],
      whatsapp: [''],
      admin_id_fk: ['1'],
    })


    if (this.edit_party) {
      this.actionBtn = "update"
      this.Party_Form.controls['party_id'].setValue(this.edit_party.party_id)
      this.Party_Form.controls['party_name'].setValue(this.edit_party.party_name)
      this.Party_Form.controls['contact_persion'].setValue(this.edit_party.contact_persion)
      this.Party_Form.controls['mobile_no'].setValue(this.edit_party.mobile_no)
      this.Party_Form.controls['whatsapp'].setValue(this.edit_party.whatsapp)
      this.Party_Form.controls['email_Id'].setValue(this.edit_party.email_Id)
      this.Party_Form.controls['ac_holder_name'].setValue(this.edit_party.ac_holder_name)
      this.Party_Form.controls['account_number'].setValue(this.edit_party.account_number)
      this.Party_Form.controls['ifsc'].setValue(this.edit_party.ifsc)
      this.Party_Form.controls['gst_No'].setValue(this.edit_party.gst_No)
      this.Party_Form.controls['address'].setValue(this.edit_party.address)
      this.Party_Form.controls['admin_id_fk'].setValue(this.edit_party.admin_id_fk)
    }

  }
  onsubmit() {
    if (!this.edit_party) {
      this.service.post_party(this.Party_Form.value).subscribe(
        (res: any) => {
          if (res.success) {
            console.log(res.message);
          }
          console.log(res)
        }
      )
    }

    else {
      this.updateParty()
    }


  }
  updateParty() {
    this.service.put_party(this.Party_Form.value).subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }



  party_data_reset() {
    this.Party_Form.reset()
  }
}