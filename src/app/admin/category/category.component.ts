import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';


export interface PeriodicElement {
  category_id: number;
  category_name: string;
  category_des: string;
  category_img: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {category_id: 1, category_name: 'munna', category_des: 'munna', category_img: 'image', action: 'bca'},
  {category_id: 2, category_name: 'ggff', category_des: 'maical', category_img: 'image', action: 'mca'},
  {category_id: 3, category_name: 'hhg', category_des: 'kgf', category_img: 'image', action: 'mba'},

];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['category_id', 'category_name', 'category_des', 'category_img', 'action'];
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
   this.matdialog.open(AddEditCategoryComponent) 
  }
 
}