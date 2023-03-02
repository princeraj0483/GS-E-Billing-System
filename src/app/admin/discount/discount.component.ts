import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDiscountComponent } from '../add-edit-discount/add-edit-discount.component';

export interface PeriodicElement {
  dis_SL_No: number;
  shop_name: string;
  cat_name: string;
  item: string;
  offer: string;
  offer_name: string;
  vailid_date: number;
  offer_condition: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  shop_name: 'Om Computer', cat_name: 'Electronic Device', item: 'computer', offer: '10%', offer_name: 'diwali', vailid_date:  16, offer_condition: 'munna', action: 'munna'},
  {dis_SL_No: 2, shop_name: 'Aakash Automobiles',cat_name: 'Mobile', item: 'Mobile' , offer: '15%', offer_name: 'diwali',  vailid_date:  10, offer_condition: 'maical', action: 'maical'},
  {dis_SL_No: 3, shop_name: 'Guddu General Store', cat_name: 'Nike', item: 'Shoes', offer: '18%', offer_name: 'chath',  vailid_date:  10, offer_condition: 'muku', action: 'mukesh'},

];

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  displayedColumns: string[] = ['dis_SL_No', 'shop_name', 'cat_name', 'item', 'offer', 'offer_name', 'vailid_date', 'offer_condition', 'action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_shop(){
   this.matdialog.open(AddEditDiscountComponent) 
  }

  edit_discount(){
    this.matdialog.open(AddEditDiscountComponent)
  }
 
}