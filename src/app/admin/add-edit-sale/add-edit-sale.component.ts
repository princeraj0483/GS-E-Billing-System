import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  dis_SL_No: number;
  cust_name: string;
  Product_name: string;
  Product_rate: number;
  product_pices: number;
  Product_quan: number;
  Action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  cust_name: 'Mukesh jha', Product_name: 'Computer', Product_rate: 3000, product_pices: 4, Product_quan: 78, Action: ''},
  {dis_SL_No: 2, cust_name: 'Amit Rana',Product_name: 'Laptop', Product_rate: 12000 , product_pices: 6, Product_quan: 67,  Action: ''},
  {dis_SL_No: 3, cust_name: 'Kumar Ankush', Product_name: 'Phone', Product_rate: 10000, product_pices: 6, Product_quan: 77,   Action: ''},

];

@Component({
  selector: 'app-add-edit-sale',
  templateUrl: './add-edit-sale.component.html',
  styleUrls: ['./add-edit-sale.component.css']
})
export class AddEditSaleComponent implements OnInit {
  displayedColumns: string[] = ['dis_SL_No', 'cust_name', 'Product_name', 'Product_rate', 'product_pices', 'Product_quan',  'Action' ];
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
   this.matdialog.open(AddEditSaleComponent) 
  }
 
}
