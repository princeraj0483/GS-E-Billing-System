import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GsbillingService {

  constructor(
    private http:HttpClient,
  ) { }
  
  post_gst(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/gst_insert.php',data)
  }

  post_party(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/party_insert.php',data)
  }

  post_unit(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/unit_insert.php',data)
  }

  post_weight(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/weight_insert.php',data)
  }

  post_size(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/size_insert.php',data)
  }

  post_discount(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/discount_insert.php',data)
  }

  post_categoryt(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/cat_insert.php',data)
  }

  post_product(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/product_insert.php',data)
  }

  post_shop(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/shop_insert',data)
  }

  
  post_Employee(data:any){
    return this.http.post<any>('http://localhost/gsebillingapi/employee_insert.php',data)
  }
  
  get_party(){
    return this.http.get<[]> ('http://localhost/gsebillingapi/party_view.php') }

  get_unit(){
    return this.http.get<[]> ('http://localhost/gsebillingapi/unit_view.php') }

  get_weight(){
    return this.http.get<[]> ('http://localhost/gsebillingapi/weight_view.php') }

  get_size(){
    return this.http.get<[]> ('http://localhost/gsebillingapi/size_view.php') }

  get_discount(){
    return this.http.get<[]> ('http://localhost/gsebillingapi/discount_view.php') }

  get_shop(){
    return this.http.get<[]> ('http://localhost/gsebillingapi/shop_view.php') }

   get_gst(){
     return this.http.get<[]> ('http://localhost/gsebillingapi/gst_view.php') }
}
