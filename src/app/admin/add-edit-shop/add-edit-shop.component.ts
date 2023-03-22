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
      State:['',],
      Distric:['',],
      Shop_category:['',],
      Address:['', Validators.required],
      Whatsapp:['', Validators.required],
      mobile_number:['', Validators.required],
      Description:['', Validators.required]
        
    })
   
  }
  onsubmit(){
    console.log(this.Shop_Form.value)
  }
  Shop_Form_reset(){
    this.Shop_Form.controls['Shop_Name'].reset()
    this.Shop_Form.controls['Owner_name'].reset()
    this.Shop_Form.controls['Email_Id'].reset()
    this.Shop_Form.controls['state'].reset()
    this.Shop_Form.controls['Address'].reset()
    this.Shop_Form.controls['Whatsapp'].reset()
    this.Shop_Form.controls['mobile_number'].reset()
    this.Shop_Form.controls['Description'].reset()
    
  }
}