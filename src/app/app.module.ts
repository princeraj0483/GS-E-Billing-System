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
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ViewportComponent } from './viewport/viewport.component';
import { ShopComponent } from './admin/shop/shop.component';
import { AddEditShopComponent } from './admin/add-edit-shop/add-edit-shop.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ShopDashboardComponent } from './shop/shop-dashboard/shop-dashboard.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustSidebarComponent } from './customer/cust-sidebar/cust-sidebar.component';
import { CustDashboardComponent } from './customer/cust-dashboard/cust-dashboard.component';
import { CategoryComponent } from './admin/category/category.component';
import { AddEditCategoryComponent } from './admin/add-edit-category/add-edit-category.component';
import { UnitComponent } from './admin/unit/unit.component';
import { AddEditUnitComponent } from './admin/add-edit-unit/add-edit-unit.component';
import { WeightComponent } from './admin/weight/weight.component';
import { AddEditWeightComponent } from './admin/add-edit-weight/add-edit-weight.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    ShopLoginComponent,
    ViewportComponent,
    ShopComponent,
    AddEditShopComponent,
    CustomerLoginComponent,
    ShopHomeComponent,
    ShopSidebarComponent,
    ShopDashboardComponent,
    CustomerHomeComponent,
    CustSidebarComponent,
    CustDashboardComponent,
    CategoryComponent,
    AddEditCategoryComponent,
    UnitComponent,
    AddEditUnitComponent,
    WeightComponent,
    AddEditWeightComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
