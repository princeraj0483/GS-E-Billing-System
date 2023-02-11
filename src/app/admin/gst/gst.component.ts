import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditGstComponent } from '../add-edit-gst/add-edit-gst.component';

export interface PeriodicElement {
  S_N_id: number;
  Gst_name: string;
  Sgst: string;
  Igst: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
{S_N_id: 1, Gst_name: 'mobile', Sgst: '10%', Igst: 'ggggffg', action: 'bca'},
{S_N_id: 2, Gst_name: 'sell', Sgst: '12%', Igst: 'hhg', action: 'mca'},
{S_N_id: 3, Gst_name: 'Hardware', Sgst: '11%', Igst: 'hhgg', action: 'mba'},

];

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {

  displayedColumns: string[] = ['S_N_id', 'Gst_name', 'Sgst', 'Igst', 'action'];
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
   this.matdialog.open(AddEditGstComponent) 
  }
 
}
