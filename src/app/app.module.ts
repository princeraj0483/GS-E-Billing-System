import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ShopLoginComponent } from './shop/shop-login/shop-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    ShopLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
