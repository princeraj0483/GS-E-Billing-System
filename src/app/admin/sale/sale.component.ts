import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditSaleComponent } from '../add-edit-sale/add-edit-sale.component';

export interface PeriodicElement {
  dis_SL_No: number;
  cust_name: string;
  shop_biil: number;
  basic_amount: number;
  sale_disc: number;
  sale_gst: number;
  sale_gross: number;
  sale_paid: number;
  sale_dues: number;
  sale_date: number;
  Action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  cust_name: 'Mukesh jha', shop_biil: 798, basic_amount: 3400, sale_disc: 0, sale_gst: 78, sale_gross: 3400, sale_paid: 200, sale_dues: 100, sale_date: 10/1/2000, Action: ''},
  {dis_SL_No: 2, cust_name: 'Amit Rana',shop_biil: 80798, basic_amount: 4200 , sale_disc: 0, sale_gst: 9, sale_gross: 3500,sale_paid: 200, sale_dues: 100, sale_date: 10/1/2000, Action: ''},
  {dis_SL_No: 3, cust_name: 'Kumar Ankush', shop_biil: 980798, basic_amount: 4500, sale_disc: 0, sale_gst: 77, sale_gross: 3600, sale_paid: 200, sale_dues: 100, sale_date: 10/1/2000, Action: ''},

];

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  displayedColumns: string[] = ['dis_SL_No', 'cust_name', 'shop_biil', 'basic_amount', 'sale_disc', 'sale_gst', 'sale_gross' , 'sale_paid', 'sale_dues', 'sale_date', 'Action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_sale(){
   this.matdialog.open(AddEditSaleComponent) 
  }
 
}

