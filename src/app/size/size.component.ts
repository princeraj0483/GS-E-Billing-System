import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditSizeComponent } from '../admin/add-edit-size/add-edit-size.component';
import { GsbillingService } from '../gsbilling.service';

export interface PeriodicElement {
  size_id: number;
  size_name: number;
  weight: number;
  description: string;
  action: string;
  
}
// const ELEMENT_DATA:PeriodicElement [] = [
//   {size_id: 1, size: 10, weight: 10, description: 'gold', action: 'bca'},
//   {size_id: 2, size: 21, weight: 12, description: 'pen', action: 'mca'},
//   {size_id: 3, size: 30, weight: 13, description: 'Rice', action: 'mba'},

// ];

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  totalcount:any = 0
  displayedColumns: string[] = ['size_id', 'size_name',  'description', 'action' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog,
    private service: GsbillingService
    
  ){

  }
  ngOnInit(): void {
    this.service.get_size().subscribe(
      (result:any)=>{
        this.dataSource.data = result.data
        this.totalcount = result.data.length
        this.dataSource.data = result.data
      }
    )

  }
  
  add_size(){
   this.matdialog.open(AddEditSizeComponent) 
  }

  edit_size(row:any){
    this.matdialog.open(AddEditSizeComponent,{
      data: row
    })
  }
 
}
