import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';
import { GsbillingService } from 'src/app/gsbilling.service';


// export interface PeriodicElement {
//   category_id: number;
//   category_name: string;
//   category_des: string;
//   action: string;
  
// }
// const ELEMENT_DATA:PeriodicElement [] = [
//   {category_id: 1, category_name: 'Grocery', category_des: 'Grocerry all electronic ',  action: 'bca'},
//   {category_id: 2, category_name: 'Mobile shop', category_des: 'Any mobile avilaible here',  action: 'mca'},
//   {category_id: 3, category_name: 'Electronic', category_des: 'Any electronic device',  action: 'mba'},

// ];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['category_id', 'category_name', 'category_des',  'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog,
    private service: GsbillingService
  ){

  }
  ngOnInit(): void {
    this.service.get_category().subscribe(
      (result:any)=>{
        this.dataSource.data = result.data
        this.dataSource.data = result.data
      }
    )
  }
  
  add_category(){
   this.matdialog.open(AddEditCategoryComponent) 
  }

  edit_category(){
    this.matdialog.open(AddEditCategoryComponent)
  }
 
}