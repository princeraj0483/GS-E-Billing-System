import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';
import { GsbillingService } from 'src/app/gsbilling.service';
import { DataSource } from '@angular/cdk/collections';


// export interface PeriodicElement {
//   S_N_id: number;
//   party_name: string;
//   mob_no: number;
//   party_add: string;
//   email_id: string;
//   party_contact: string;
//   action: string;
  
// }
// const ELEMENT_DATA:PeriodicElement [] = [
// {S_N_id: 1, party_name: 'Aakash', mob_no: 8877817816, party_add: 'hajipur', party_contact: 'munna', email_id: '@Aakashgmail.com', action: ''},
// {S_N_id: 2, party_name: 'Raja', mob_no: 7876543277, party_add: 'hajipur', party_contact: 'munna', email_id: '@Rajagmail.com', action: ''},
// {S_N_id: 3, party_name: 'Amit', mob_no: 986436454, party_add: 'hajipur', party_contact: 'munna', email_id: '@Amitgmail.com', action: ''},

// ];


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  totolcount:any = 0
  displayedColumns: string[] = ['S_N_id', 'party_name', 'mob_no', 'party_add', 'party_contact', 'email_id', 'action']; 
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private matdialog:MatDialog,
    private service:GsbillingService
  ){

  }
  ngOnInit(): void {
    this.service.get_party().subscribe(
      (result:any)=>{
        console.log(result)
        this.dataSource = result.data
        this.totolcount = result.data.length
        this.dataSource.data = result.data

      }
    )
  }
  add_party(){
    this.matdialog.open(AddEditPartyComponent,{
      disableClose:true
     })
  }
  get_party(){

  }
  edit_party(){
    this.matdialog.open(AddEditPartyComponent)
  }
 
}
