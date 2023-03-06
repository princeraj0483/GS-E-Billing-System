import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditLedgerComponent } from '../admin/add-edit-ledger/add-edit-ledger.component';



export interface PeriodicElement {
  dis_SL_No: number;
  cash: string;
  Sale: string;
  Expense: string;
  Deposit: string;
  offer_name: string;
  vailid_date: string;
  offer_condition: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  cash: 'Om Computer', Sale: 'Electronic Device', Expense: 'computer', Deposit: '10%', offer_name: 'diwali', vailid_date:  '5/4/2023', offer_condition: 'munna', action: 'munna'},
  {dis_SL_No: 2, cash: 'Aakash Automobiles',Sale: 'Mobile', Expense: 'Mobile' , Deposit: '15%', offer_name: 'diwali',  vailid_date:  '5/4/2023', offer_condition: 'maical', action: 'maical'},
  {dis_SL_No: 3, cash: 'Guddu General Store', Sale: 'Nike', Expense: 'Shoes', Deposit: '18%', offer_name: 'chath',  vailid_date:  '5/4/2023', offer_condition: 'muku', action: 'mukesh'},

];


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  displayedColumns: string[] = ['dis_SL_No', 'cash', 'Sale', 'Expense', 'Deposit', 'offer_name', 'vailid_date', 'offer_condition', 'action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_ledger(){
   this.matdialog.open(AddEditLedgerComponent) 
  }
  edit_ledger(){
    this.matdialog.open(AddEditLedgerComponent) 
   }
   edit_ledge(){
    this.matdialog.open(AddEditLedgerComponent) 
   }

}
