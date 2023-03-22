import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  dis_SL_No: number;
  cust_name: string;
  Product_name: string;
  Product_rate: number;
  Product_quan: number;
  Action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {dis_SL_No: 1,  cust_name: 'Mukesh jha', Product_name: 'Computer', Product_rate: 3000,  Product_quan: 78, Action: ''},
  {dis_SL_No: 2, cust_name: 'Amit Rana',Product_name: 'Laptop', Product_rate: 12000 ,  Product_quan: 67,  Action: ''},
  {dis_SL_No: 3, cust_name: 'Kumar Ankush', Product_name: 'Phone', Product_rate: 10000, Product_quan: 77,   Action: ''},

];
@Component({
  selector: 'app-add-edit-purchase',
  templateUrl: './add-edit-purchase.component.html',
  styleUrls: ['./add-edit-purchase.component.css']
})
export class AddEditPurchaseComponent implements OnInit {
	active = 1;
  Purchase_Form: any;
  item_Form: any;
  displayedColumns: string[] = ['dis_SL_No', 'cust_name', 'Product_name', 'Product_rate', 'Product_quan',  'Action' ];
  dataSource = ELEMENT_DATA;
  Party_Form:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Party_Form = this.fb.group({
      Party:['',Validators.required],
      Mobile:['',Validators.required],
        
    })
   
  }
}
