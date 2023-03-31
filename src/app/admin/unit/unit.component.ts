import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUnitComponent } from '../add-edit-unit/add-edit-unit.component';
import { GsbillingService } from 'src/app/gsbilling.service';

export interface PeriodicElement {
  category_id: number;
  Name: string;
  unit_des: string;
  action: string;
  
}
// const ELEMENT_DATA:PeriodicElement [] = [
//   {category_id: 1, Name: 'Litter', unit_des: 'home', action: ''},
//   {category_id: 2, Name: 'Kg', unit_des: 'home', action: ''},
//   {category_id: 3, Name: 'inch', unit_des: 'home', action: ''},

// ];
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  displayedColumns: string[] = ['category_id', 'Name', 'unit_des', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog,
    private service:GsbillingService
  ){

  }
  ngOnInit(): void {
    this.service.get_unit().subscribe(
      (result:any)=>{
        this.dataSource.data = result.data
      }
    )

  }
  add_shop(){
    this.matdialog.open(AddEditUnitComponent,{
     disableClose:true
    })
   }
  edit_unit(){
    this.matdialog.open(AddEditUnitComponent)
  }
 
}
