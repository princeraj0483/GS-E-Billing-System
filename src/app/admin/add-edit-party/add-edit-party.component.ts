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
      Address:['', Validators.required]
        
    })
    throw new Error('Method not implemented.');
  }
}