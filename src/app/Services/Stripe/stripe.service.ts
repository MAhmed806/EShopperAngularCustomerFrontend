import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../Data/data.service';
@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private readonly BaseUrl = 'https://localhost:44385/api/Payment/';
  constructor(private http: HttpClient,private dataservice:DataService) {}
   getusercards(){
   return this.http.get(this.BaseUrl+'GetCards/'+this.dataservice.getusername());
   }
   createcharge(cost:any){
    return this.http.post(this.BaseUrl+'CreateCharge',cost);
   }
   createcard(body:any){
    return this.http.post(this.BaseUrl+'AddCard',body);
   }
   refund(orderid:any){
    return this.http.post(this.BaseUrl+'Refund',orderid);
   }
   refundstatus(orderid:any){
    return this.http.get(this.BaseUrl+'RefundStatus/'+orderid);

   }
 
}
