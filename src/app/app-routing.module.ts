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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customerlogin', component: CustomerLoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'shoplogin', component: ShopLoginComponent },
  { path: 'shophome', component: ShopHomeComponent },
  {
    path: 'adminhome', component: AdminHomeComponent,


    children: [
      { path: '', component: ViewportComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'addeditshop', component: AddEditShopComponent },
      {path: 'addeditcategory', component: AddEditCategoryComponent},
      { path: 'shopdashboard', component: ShopDashboardComponent },
      {path: 'category', component: CategoryComponent},
      {path: 'unit', component: UnitComponent},
      {path: 'weight', component: WeightComponent}

    ]
  },
  {
    path: 'customerhome', component: CustomerHomeComponent,
   

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
