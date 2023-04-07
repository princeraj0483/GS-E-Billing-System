import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditWeightComponent } from '../add-edit-weight/add-edit-weight.component';
import { GsbillingService } from 'src/app/gsbilling.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  totolcount: any = 0
  displayedColumns: string[] = ['weight_id', 'weight', 'weight_des', 'action' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog,
    private service:GsbillingService
  ){

  }
  ngOnInit(): void {
    this.service.get_weight().subscribe(
      (result:any)=>{
        this.dataSource.data = result.data
        this.totolcount = result.data.length
        this.dataSource.data = result.data
      }
    )

  }
  add_weight(){
    this.matdialog.open(AddEditWeightComponent,{
      disableClose:true
     })
  }
  edit_weight(row:any){
    this.matdialog.open(AddEditWeightComponent,{
      data:row
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}