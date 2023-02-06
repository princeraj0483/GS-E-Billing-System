import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditExpenceTypeComponent } from '../add-edit-expence-type/add-edit-expence-type.component';

export interface PeriodicElement {
  expence_id: number;
  shop_name: string;
  exp_amount: number;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {expence_id: 1, shop_name: 'munna',  exp_amount: 888,  action: 'bca'},
  {expence_id: 2, shop_name: 'ggff',  exp_amount: 777,  action: 'mca'},
  {expence_id: 3, shop_name: 'hhg',  exp_amount: 666,   action: 'mba'},

];

@Component({
  selector: 'app-expence-type',
  templateUrl: './expence-type.component.html',
  styleUrls: ['./expence-type.component.css']
})
export class ExpenceTypeComponent implements OnInit {

  displayedColumns: string[] = ['expence_id', 'shop_name', 'exp_amount', 'action'];
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
   this.matdialog.open(AddEditExpenceTypeComponent) 
  }
 
}
