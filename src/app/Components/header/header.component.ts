import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedin:boolean=false;
  Username:any;
  constructor(private dataservice:DataService,private route:Router,private session:SessionStorageService,private authservice:AuthService,private Localstorage:LocalStorageService){

  }
  producttypes:any;
  cartitems:any=0;
  ngOnInit(){
    this.dataservice.getProdType().subscribe(producttypes=>{this.producttypes=producttypes;});
    this.cartitems= this.session.get('cart')!=null?(this.session.get('cart')).length:0;
    this.loggedin=this.authservice.isLoggedIn();
    this.Username=this.dataservice.getusername();
  }
  Logout(){
    this.authservice.logout();
    location.reload();
  }
  gettypes(id:any){
    let params={id};
    this.route.navigate(['/producttypedetails',params]);
  }
  search(search:string){
    let params={search};
    this.route.navigate(['/search',params]);
  }
  gotocart(){
    this.route.navigate(['/cart']);
  }
}