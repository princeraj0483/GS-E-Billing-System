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
import { GstComponent } from './admin/gst/gst.component';
import { AddEditGstComponent } from './admin/add-edit-gst/add-edit-gst.component';
import { ItemComponent } from './admin/item/item.component';
import { AddEditItemComponent } from './admin/add-edit-item/add-edit-item.component';
import { EmployeComponent } from './admin/employe/employe.component';
import { AddEditEmployeComponent } from './admin/add-edit-employe/add-edit-employe.component';
import { DiscountComponent } from './admin/discount/discount.component';
import { AddEditDiscountComponent } from './admin/add-edit-discount/add-edit-discount.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ExpenceComponent } from './admin/expence/expence.component';
import { AddEditExpenceComponent } from './admin/add-edit-expence/add-edit-expence.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { AddEditCustomerComponent } from './admin/add-edit-customer/add-edit-customer.component';
import { ExpenceTypeComponent } from './admin/expence-type/expence-type.component';
import { AddEditExpenceTypeComponent } from './admin/add-edit-expence-type/add-edit-expence-type.component';
import { PartyComponent } from './admin/party/party.component';
import { AddEditPartyComponent } from './admin/add-edit-party/add-edit-party.component';
import { ProductComponent } from './admin/product/product.component';
import { AddEditProductComponent } from './admin/add-edit-product/add-edit-product.component';
import { SaleComponent } from './admin/sale/sale.component';
import { AddEditSaleComponent } from './admin/add-edit-sale/add-edit-sale.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseComponent } from './admin/purchase/purchase.component';
import { AddEditPurchaseComponent } from './admin/add-edit-purchase/add-edit-purchase.component';
import { AccountComponent } from './admin/account/account.component';
import { AddEditAccountComponent } from './admin/add-edit-account/add-edit-account.component';
import { ProfitComponent } from './admin/profit/profit.component';
import { AddEditProfitComponent } from './admin/add-edit-profit/add-edit-profit.component';
import { LedgerComponent } from './ledger/ledger.component';
import { AddEditLedgerComponent } from './admin/add-edit-ledger/add-edit-ledger.component';
import { LossComponent } from './loss/loss.component';
import { AddEditLossComponent } from './admin/add-edit-loss/add-edit-loss.component';
import { NgxUiLoaderHttpModule,NgxUiLoaderModule,NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { SizeComponent } from './size/size.component';
import { AddEditSizeComponent } from './home/add-edit-size/add-edit-size.component';
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
    GstComponent,
    AddEditGstComponent,
    ItemComponent,
    AddEditItemComponent,
    EmployeComponent,
    AddEditEmployeComponent,
    DiscountComponent,
    AddEditDiscountComponent,
    ExpenceComponent,
    AddEditExpenceComponent,
    CustomerComponent,
    AddEditCustomerComponent,
    ExpenceTypeComponent,
    AddEditExpenceTypeComponent,
    PartyComponent,
    AddEditPartyComponent,
    ProductComponent,
    AddEditProductComponent,
    SaleComponent,
    AddEditSaleComponent,
    PurchaseComponent,
    AddEditPurchaseComponent,
    AddEditAccountComponent,
    ProfitComponent,
    AddEditProfitComponent,
    LedgerComponent,
    AddEditLedgerComponent,
    LossComponent,
    AddEditLossComponent,
    SizeComponent,
    AddEditSizeComponent,
  
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
    MatFormFieldModule,
    MatDatepickerModule,
    NgbModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    HttpClientModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
      
    })
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
