import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUnitComponent } from '../add-edit-unit/add-edit-unit.component';

export interface PeriodicElement {
  category_id: number;
  unit_name: string;
  unit_des: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {category_id: 1, unit_name: 'jsaja', unit_des: 'home', action: 'bca'},
  {category_id: 2, unit_name: 'ggg', unit_des: 'home', action: 'mca'},
  {category_id: 3, unit_name: 'hhhh', unit_des: 'home', action: 'mba'},

];
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  displayedColumns: string[] = ['category_id', 'unit_name', 'unit_des', 'action'];
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
   this.matdialog.open(AddEditUnitComponent) 
  }
 
}
