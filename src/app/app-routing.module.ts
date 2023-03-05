import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ShopLoginComponent } from './shop/shop-login/shop-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewportComponent } from './viewport/viewport.component';
import { ShopComponent } from './admin/shop/shop.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { AddEditShopComponent } from './admin/add-edit-shop/add-edit-shop.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopDashboardComponent } from './shop/shop-dashboard/shop-dashboard.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { AddEditCategoryComponent } from './admin/add-edit-category/add-edit-category.component';
import { UnitComponent } from './admin/unit/unit.component';
import { WeightComponent } from './admin/weight/weight.component';
import { GstComponent } from './admin/gst/gst.component';
import { EmployeComponent } from './admin/employe/employe.component';
import { DiscountComponent } from './admin/discount/discount.component';
import { ExpenceComponent } from './admin/expence/expence.component';
import { CustDashboardComponent } from './customer/cust-dashboard/cust-dashboard.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { ExpenceTypeComponent } from './admin/expence-type/expence-type.component';
import { PartyComponent } from './admin/party/party.component';
import { ProductComponent } from './admin/product/product.component';
import { SaleComponent } from './admin/sale/sale.component';
import { AddEditSaleComponent } from './admin/add-edit-sale/add-edit-sale.component';
import { PurchaseComponent } from './admin/purchase/purchase.component';
import { AddEditPurchaseComponent } from './admin/add-edit-purchase/add-edit-purchase.component';
import { AccountComponent } from './admin/account/account.component';
import { ProfitComponent } from './admin/profit/profit.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LossComponent } from './loss/loss.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homepage', component: HomeComponent },
  { path: 'customerlogin', component: CustomerLoginComponent },
  { path: 'shoplogin', component: ShopLoginComponent },
  { path: 'shophome', component: ShopHomeComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  {path: 'adminhome', component: AdminHomeComponent,

    children: [
      { path: '', component: ViewportComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'addeditshop', component: AddEditShopComponent },
      { path: 'addeditcategory', component: AddEditCategoryComponent},
      { path: 'shopdashboard', component: ShopDashboardComponent },
      { path: 'category', component: CategoryComponent},
      { path: 'unit', component: UnitComponent},
      { path: 'discount', component: DiscountComponent},
      { path: 'weight', component: WeightComponent},
      { path: 'gst', component: GstComponent},
      { path: 'employe', component: EmployeComponent},
      { path: 'expence', component: ExpenceComponent},
      { path:'customer',component:CustomerComponent},
      { path: 'expence-type', component: ExpenceTypeComponent},
      { path: 'party', component: PartyComponent},
      { path: 'product', component: ProductComponent},
      {path: 'account', component: AccountComponent},
      {path: 'profit', component: ProfitComponent},
      {path: 'ledger', component: LedgerComponent},
      {path: 'profit', component: ProfitComponent},
      {path: 'loss', component: LossComponent},
      

      { path: 'purchase', component: ViewportComponent,
          children:[
            {path: '', component: PurchaseComponent},
            {path: 'editpurchase', component: AddEditPurchaseComponent},
            ]
      },
      { path: 'sale', component: ViewportComponent,
          children:[
            {path: '', component: SaleComponent},
            {path: 'addeditsale', component: AddEditSaleComponent},
            ]
      },

    ]
  },
 
  { path: 'customerlogin', component: CustomerLoginComponent },
  {
    path: 'customerhome', component: CustomerHomeComponent,
    children: [
      { path: '', component: CustDashboardComponent },
      {path:'course', component:CustDashboardComponent},

    
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
