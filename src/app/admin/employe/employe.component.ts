import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployeComponent } from '../add-edit-employe/add-edit-employe.component';

export interface PeriodicElement {
  emp_SL_No: number;
  emp_name: string;
  emp_mob: number;
  emp_add: string;
  emp_photo: string;
  emp_action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {emp_SL_No: 1,  emp_name: 'Rana Singh', emp_mob: 9508510028, emp_add: 'Hajipur', emp_photo: 'image.jpg', emp_action: 'view',},
  {emp_SL_No: 2, emp_name: 'Mukesh Jha',emp_mob: 9508512028, emp_add: 'Hajipur' , emp_photo: 'image.jpg', emp_action: 'view', },
  {emp_SL_No: 3, emp_name: 'Amit Raz', emp_mob: 9508510028, emp_add:'Hajipur', emp_photo: 'image.jpg', emp_action: 'view',},

];

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  displayedColumns: string[] = ['emp_SL_No', 'emp_name', 'emp_mob', 'emp_add', 'emp_photo', 'emp_action', ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_employee(){
   this.matdialog.open(AddEditEmployeComponent) 
  }
 
  edit_employe(){
    this.matdialog.open(AddEditEmployeComponent) 
   }
   edit_employ(){
     this.matdialog.open(AddEditEmployeComponent)
   }
  

}
