import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditExpenceComponent } from '../add-edit-expence/add-edit-expence.component';


export interface PeriodicElement {
  expence_id: number;
  shop_name: string;
  type_name: string;
  exp_des: number;
  exp_amount: number;
  exp_date: number;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {expence_id: 1, shop_name: 'munna', type_name: 'munna', exp_des: 9508510028, exp_amount: 888, exp_date: 22, action: 'bca'},
  {expence_id: 2, shop_name: 'ggff', type_name: 'maical', exp_des: 9808510028, exp_amount: 777, exp_date: 5, action: 'mca'},
  {expence_id: 3, shop_name: 'hhg', type_name: 'kgf',   exp_des:  9408510028 ,  exp_amount: 666, exp_date: 2, action: 'mba'},

];

@Component({
  selector: 'app-expence',
  templateUrl: './expence.component.html',
  styleUrls: ['./expence.component.css']
})
export class ExpenceComponent implements OnInit {
  displayedColumns: string[] = ['expence_id', 'shop_name', 'type_name', 'exp_des', 'exp_amount', 'exp_date', 'action'];
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
   this.matdialog.open(AddEditExpenceComponent) 
  }
 
}