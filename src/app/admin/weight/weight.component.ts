import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditWeightComponent } from '../add-edit-weight/add-edit-weight.component';

export interface UserData {
  category_id: number;
  category_name: string;
  category_description: string;
  category_image: number

}

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  displayedColumns: string[] = ['category_id', 'category_name', 'category_owner', ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(
    private matdialog:MatDialog
  ){

  }

  ngOnInit(): void {
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add_shop(){
   this.matdialog.open(AddEditWeightComponent) 
  }
 
}
