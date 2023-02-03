import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditShopComponent } from '../add-edit-shop/add-edit-shop.component';

export interface UserData {
  shop_id: number;
  shop_name: string;
  shop_owner: string;
  shop_whatsapp: number
  shop_email: string
}


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  displayedColumns: string[] = ['shop_id', 'Shop_name', 'Owner_owner', 'Shop_whatsapp','Shop_email','Shop_dues',];
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
   this.matdialog.open(AddEditShopComponent) 
  }
 
}





