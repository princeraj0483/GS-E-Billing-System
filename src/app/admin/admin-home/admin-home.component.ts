import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  name: any;
  opened:boolean= true
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  constructor(
    private observe:BreakpointObserver
  ) { }
  ngOnInit(): void {
   
    
  }


  

}
