import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditShopComponent } from '../add-edit-shop/add-edit-shop.component';
import { GsbillingService } from 'src/app/gsbilling.service';

export interface PeriodicElement {
  shop_id: number;
  shop_name: string;
  shop_owner: string;
  gst_no: string;
  Whatsup_no: string;
  email_id: string;
  state: string;
  Address: string
  Action: string;
  
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  totolcount:any = 0
  displayedColumns: string[] = ['shop_id', 'shop_name', 'shop_owner',  'gst_no', 'Whatsup_no', 'email_id', 'state', 'Address',  'Action' ]
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog,
    private service: GsbillingService,
  ){

  }
  ngOnInit(): void {
    this.service.get_shop().subscribe(
      (result:any)=>{
        // console.log(result.data.length)
        this.totolcount = result.data.length
        this.dataSource.data = result.data

      }
    )
  }
  add_shop(){
   this.matdialog.open(AddEditShopComponent)
  }
  edit_shop(){
    this.matdialog.open(AddEditShopComponent)
  }
 
}





