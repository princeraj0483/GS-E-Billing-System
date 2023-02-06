import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditItemComponent } from '../add-edit-item/add-edit-item.component';

export interface PeriodicElement {
  S_N_id: number;
  Item_name: string;
  Category: string;
  Shop: string;
  Item_image: string;
  Action: string;

  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {S_N_id: 1, Item_name: 'veg', Category: 'jdjadjka', Shop: 'mical', Item_image: 'jpg', Action: 'munna',},
  {S_N_id: 2, Item_name: 'non veg', Category: 'hjhjhh', Shop: 'asdada', Item_image: 'jpg', Action: 'dasgh',},
  {S_N_id: 3, Item_name: 'veg', Category: 'ghhhh', Shop: 'hhhh', Item_image: 'jpg', Action: 'gggf',},
];

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  displayedColumns: string[] = ['S_N_id', 'Item_name', 'Category', 'Shop', 'Item_image', 'Action'];
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
   this.matdialog.open(AddEditItemComponent) 
  }
 
}