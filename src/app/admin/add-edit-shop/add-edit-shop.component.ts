import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GsbillingService } from 'src/app/gsbilling.service';

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
    private matDialog:MatDialog,
    private fb:FormBuilder,
    private service:GsbillingService
  ){

  }
  ngOnInit(): void {
    this.Shop_Form = this.fb.group({
      Shop_Name:['',Validators.required],
      Owner_name:['',Validators.required],
      gst_no:[''],
      email_id:[''],
      state:[''],
      District:[''],
      Address:['', Validators.required],
      Whatsup_no:['', Validators.required],
      mobile_number:[''],
      admin_id_fk:['']
    })
  }
  onsubmit(){
    this.service.post_shop(this.Shop_Form.value).subscribe(
      (res:any)=>{
        if(res.success){
          console.log(res.message);
          this.matDialog.closeAll();
        }
        console.log(res)
      }
    )
     
  } 
  Shop_Form_reset(){
    this.Shop_Form.reset()    
  }
}