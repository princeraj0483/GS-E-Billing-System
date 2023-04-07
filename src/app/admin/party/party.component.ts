import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';
import { GsbillingService } from 'src/app/gsbilling.service';
import { DataSource } from '@angular/cdk/collections';

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
  edit_party(row:any){
    this.matdialog.open(AddEditPartyComponent,{
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
