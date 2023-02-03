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



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: AdminLoginComponent},
  { path: 'shoplogin', component: ShopLoginComponent} ,
  {path: 'adminhome', component: AdminHomeComponent,
  
    children: [
      { path: '', component: ViewportComponent },
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'customer', component: CustomerLoginComponent},
      {path: 'addeditshop', component: AddEditShopComponent}
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
