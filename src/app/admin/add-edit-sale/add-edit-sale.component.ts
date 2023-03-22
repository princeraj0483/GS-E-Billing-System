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
  selector: 'app-add-edit-sale',
  templateUrl: './add-edit-sale.component.html',
  styleUrls: ['./add-edit-sale.component.css']
})
export class AddEditSaleComponent implements OnInit {
	active = 1;
  Customer_Form: any;
  Product_Form: any;
  displayedColumns: string[] = ['dis_SL_No', 'cust_name', 'Product_name', 'Product_rate', 'Product_quan',  'Action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Customer_Form = this.fb.group({
      Party_Id:['',Validators.required],
      mobile_number:['',Validators.required],
      party_address:['', Validators.required],
      party_name:['',Validators.required],
      party_category:['', Validators.required],
      weight:['', Validators.required],
      size:['', Validators.required],
      unit:['',Validators.required],
      Rate:['', Validators.required],
      Total_amount:['', Validators.required],
      Basic_amount:['', Validators.required]
     
        
    })
  }
  onsubmit(){
    console.log(this.Customer_Form.value)
  }
}