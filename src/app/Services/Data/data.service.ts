import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl='https://localhost:44385/api/Home/'
  constructor(private http:HttpClient) { }
  getProd(){
    return this.http.get(this.baseUrl+'Products');
  }
  getProdType(){
    return this.http.get(this.baseUrl+'ProductTypes');
  }
  getproddetails(id:any){
    return this.http.get(this.baseUrl+'ProductDetails/'+id);
  }
  getprodtypedetails(id:any){
    return this.http.get(this.baseUrl+'ProductTypeDetails/'+id);
  }
  search(search:string){
    return this.http.get(this.baseUrl+'Search/'+search);
  }
  filter(min:any,max:any){
    return this.http.get(this.baseUrl+'Filter/'+min+'/'+max);
  }
  lowtohigh(){
    return this.http.get(this.baseUrl+"lowtohigh");
  }
  hightolow(){
    return this.http.get(this.baseUrl+"hightolow");
  }
  getorderslist(){
    return this.http.get(this.baseUrl+'OrdersList');
  }
  getorderslistspecific(username:string){
    return this.http.get(this.baseUrl+'MyOrderList/'+username);
  }
  getorderdetails(id:any){
    return this.http.get(this.baseUrl+'OrderDetails/'+id);
  }
  placeorder(order:any){
    return this.http.post(this.baseUrl+'Checkout/',order);
  }
  cancelorder(id:any){
    return this.http.delete(this.baseUrl+'CancelOrder/'+id);
  }
  getusername():string{
    const token=localStorage.getItem('access_token');
    if(token !=null){
    const decoded:any =jwt_decode(token);
    return decoded.sub; 
    }
    return '';

  }

}
