import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';

export interface PeriodicElement {
  shop_id: number;
  Cat_name: string;
  pro_name: string;
  pro_quantity: number;
  Rate: number;
  shop_email: string;
  Description: string;
  Action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {shop_id: 1, Cat_name: 'Grocery', pro_name: 'pen', pro_quantity: 1, shop_email: '@Mukesh Jha', Description: 'Hajipur', Rate: 2222, Action: ''},
  {shop_id: 2, Cat_name: 'Computer', pro_name: 'Computer', pro_quantity: 2 , shop_email: '@Rana Singh', Description: 'Hajipur', Rate: 3434, Action: ''},
  {shop_id: 3, Cat_name: 'Electronic', pro_name: 'Mobile', pro_quantity: 2, shop_email: '@Amit Singh', Description: 'Hajipur', Rate: 3435, Action: ''},

];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['shop_id', 'Cat_name', 'pro_name', 'pro_quantity', 'Rate', 'Description', 'Action' ]
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
   this.matdialog.open(AddEditProductComponent) 
  }
 
}