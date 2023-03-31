import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDiscountComponent } from '../add-edit-discount/add-edit-discount.component';
import { GsbillingService } from 'src/app/gsbilling.service';

export interface PeriodicElement {
  dis_SL_No: number;
  discount: string;
  discription: string;
  action: string;
  
}
// const ELEMENT_DATA:PeriodicElement [] = [
//   {dis_SL_No: 1, discount: '15%', discription: 'good',  action: 'munna'},
//   {dis_SL_No: 2, discount: '14%', discription: 'good',  action: 'maical'},
//   {dis_SL_No: 3, discount: '10%', discription: 'good',  action: 'mukesh'},

// ];

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  displayedColumns: string[] = ['dis_SL_No', 'discount', 'discription', 'action' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog,
    private service: GsbillingService
  ){

  }
  ngOnInit(): void {
    this.service.get_discount().subscribe(
      (result:any)=>{
        this.dataSource.data = result.data
      }
    )
  }
  
  add_shop(){
   this.matdialog.open(AddEditDiscountComponent) 
  }

  edit_discount(){
    this.matdialog.open(AddEditDiscountComponent)
  }
 
}