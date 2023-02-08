import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditShopComponent } from '../add-edit-shop/add-edit-shop.component';

export interface PeriodicElement {
  shop_id: number;
  shop_name: string;
  shop_owner: string;
  shop_number: number;
  shop_email: string;
  shop_add: string;
  Action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {shop_id: 1, shop_name: 'Guddu General Store', shop_owner: 'Mukesh Jha', shop_number: 9508510028, shop_email: '@Mukesh Jha', shop_add: 'Hajipur', Action: ''},
  {shop_id: 2, shop_name: 'Abhishek Corner Store', shop_owner: 'Rana Singh', shop_number: 9508510028, shop_email: '@Rana Singh', shop_add: 'Hajipur', Action: ''},
  {shop_id: 3, shop_name: 'Sudha Center', shop_owner: 'Amit Singh', shop_number: 9508510028, shop_email: '@Amit Singh', shop_add: 'Hajipur', Action: ''},

];

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  displayedColumns: string[] = ['shop_id', 'shop_name', 'shop_owner', 'shop_number', 'shop_email', 'shop_add', 'Action' ]
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
   this.matdialog.open(AddEditShopComponent) 
  }
 
}





