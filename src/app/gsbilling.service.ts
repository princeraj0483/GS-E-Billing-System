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
}
