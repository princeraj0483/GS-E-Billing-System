import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditGstComponent } from '../add-edit-gst/add-edit-gst.component';
import { GsbillingService } from 'src/app/gsbilling.service';

export interface PeriodicElement {
  S_N_id: number;
  Gst_name: string;
  Sgst: string;
  action: string;
  
}
// const ELEMENT_DATA:PeriodicElement [] = [
// {S_N_id: 1, Gst_name: 'mobile', Sgst: '10%',  action: 'bca'},
// {S_N_id: 2, Gst_name: 'sell', Sgst: '12%', action: 'mca'},
// {S_N_id: 3, Gst_name: 'Hardware', Sgst: '11%',  action: 'mba'},

// ];

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {
  totolcount:any = 0
  displayedColumns: string[] = ['S_N_id', 'Gst_name', 'Sgst',  'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog,
    private service:GsbillingService 
  ){

  }
  ngOnInit(): void {
    this.service.get_gst().subscribe(
      (result:any)=>{
        this.dataSource.data = result.data
        this.totolcount = result.data.length
        this.dataSource.data = result.data
      }
    )
  }
  
  add_shop(){
   this.matdialog.open(AddEditGstComponent) 
  }
 
}
