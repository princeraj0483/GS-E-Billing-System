import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUnitComponent } from '../add-edit-unit/add-edit-unit.component';

export interface PeriodicElement {
  category_id: number;
  Name: string;
  unit_des: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {category_id: 1, Name: 'Litter', unit_des: 'home', action: ''},
  {category_id: 2, Name: 'Kg', unit_des: 'home', action: ''},
  {category_id: 3, Name: 'inch', unit_des: 'home', action: ''},

];
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  displayedColumns: string[] = ['category_id', 'Name', 'unit_des', 'action'];
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
  
  edit_unit(){
    this.matdialog.open(AddEditUnitComponent)
  }
 
}
