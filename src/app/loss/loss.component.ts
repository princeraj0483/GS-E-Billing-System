import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditLossComponent } from '../admin/add-edit-loss/add-edit-loss.component';



export interface PeriodicElement {
  dis_SL_No: number;
  Bill_no: string;
  Customer: string;
  Address: string;
  Product: string;
  offer_name: string;
  sale_amount: string;
  loss_amount: string;
  date: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  Bill_no: 'SAl733311', Customer: 'Mukesh', Address: 'Hajipur', Product: 'mobile', offer_name: 'diwali', sale_amount: '1200', loss_amount: '1500',  date: '3/4/2023'},
  {dis_SL_No: 2, Bill_no: 'SAl4393311',Customer: 'Rana', Address: 'Patna' , Product: 'Watch', offer_name: 'diwali', sale_amount: '1200', loss_amount: '1500',    date: '3/4/2023'},
  {dis_SL_No: 3, Bill_no: 'SAl4303311', Customer: 'Gaurav', Address: 'Chapra', Product: 'Ring', offer_name: 'chath', sale_amount: '1200', loss_amount: '1500',    date: '3/4/2023'},

];

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent implements OnInit {

  displayedColumns: string[] = ['dis_SL_No', 'Bill_no', 'Customer', 'Address', 'Product', 'offer_name', 'sale_amount', 'loss_amount',  'date' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_loss(){
   this.matdialog.open(AddEditLossComponent) 
  }
 
}