import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditAccountComponent } from '../add-edit-account/add-edit-account.component';
import { AddEditProfitComponent } from '../add-edit-profit/add-edit-profit.component';


export interface PeriodicElement {
  dis_SL_No: number;
  cash: string;
  Sale: string;
  Expense: string;
  Deposit: string;
  offer_name: string;
  Product_Price: string;
  vailid_date: number;
  offer_condition: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  cash: 'SAL27738778', Sale: 'Mukesh', Expense: 'Hajipur', Deposit: 'Computer', offer_name: '52.10', Product_Price: '5464', vailid_date:  16, offer_condition: 'munna', action: 'munna'},
  {dis_SL_No: 2, cash: 'SAL20038778',Sale: 'Balaji', Expense: 'Patna' , Deposit: 'Phone', offer_name: '52.26', Product_Price: '5464',  vailid_date:  10, offer_condition: 'maical', action: 'maical'},
  {dis_SL_No: 3, cash: 'SAL68638778', Sale: 'Rana', Expense: 'Sonepur', Deposit: 'Watch', offer_name: '105.35', Product_Price: '5464',  vailid_date:  10, offer_condition: 'muku', action: 'mukesh'},

];

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
  displayedColumns: string[] = ['dis_SL_No', 'cash', 'Sale', 'Expense', 'Deposit', 'offer_name', 'offer_name', 'vailid_date', 'offer_condition', 'action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_profit(){
   this.matdialog.open(AddEditProfitComponent) 
  }

}
