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
  {shop_id: 1, shop_name: 'Hajipur', shop_owner: 'nsbaba', shop_number: 9508510028, shop_email: '@munna', shop_add: 'Hajipur', Action: 'bca'},
  {shop_id: 2, shop_name: 'hagipur', shop_owner: 'hjsha', shop_number: 9508510028, shop_email: '@maical', shop_add: 'hajipur', Action: 'mca'},
  {shop_id: 3, shop_name: 'ggggg', shop_owner: 'bjkhjhj', shop_number: 9508510028, shop_email: '@maical', shop_add: 'hajipur', Action: 'bca'},

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





