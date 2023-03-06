import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-edit-shop',
  templateUrl: './add-edit-shop.component.html',
  styleUrls: ['./add-edit-shop.component.css']
})
export class AddEditShopComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Shop_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Shop_Form = this.fb.group({
      Shop_Name:['',Validators.required],
      Owner_name:['',Validators.required],
      Email_Id:['',],
      state:['',],
      Address:['', Validators.required],
      Whatsapp:['', Validators.required],
      mobile_number:['', Validators.required],
      Description:['', Validators.required]
        
    })
   
  }
  Shop_Form_reset(){
    this.Shop_Form.reset()
  }
}