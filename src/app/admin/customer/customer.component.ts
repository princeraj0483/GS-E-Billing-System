import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';


export interface PeriodicElement {
  dis_SL_No: number;
  cust_name: string;
  cust_whats: number;
  cust_add: string;
  cust_email: string;
  cust_pass: number;
  Action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  cust_name: 'Mukesh jha', cust_whats: 7654980798, cust_add: 'hajipur', cust_email: '@bgggggf', cust_pass: 7867787678, Action: ''},
  {dis_SL_No: 2, cust_name: 'Amit Rana',cust_whats: 7654980798, cust_add: 'hajipur' , cust_email: '@hjjkhhh', cust_pass: 677766776,  Action: ''},
  {dis_SL_No: 3, cust_name: 'Kumar Ankush', cust_whats: 7654980798, cust_add: 'hajipur', cust_email: '@gghghgh', cust_pass: 7787776,   Action: ''},

];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  displayedColumns: string[] = ['dis_SL_No', 'cust_name', 'cust_whats', 'cust_add', 'cust_email', 'cust_pass',  'Action' ];
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
   this.matdialog.open(AddEditCustomerComponent) 
  }
 
}
