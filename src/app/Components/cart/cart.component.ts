import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Product } from 'src/app/Models/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private session:SessionStorageService,private router:Router){}
  cartitems:any[]=[];           
  subtotal=0;
  netprice=0;
  shipping=0;
  grandtotal=0;
  occurence:any;
  totalcost=this.session.get('totalordercost');
  ngOnInit(){
    if(this.session.get('cart')!=null){
      this.cartitems=this.session.get('cart');
      this.cartitems.forEach(item => {
      this.netprice=item.Price*item.Quantity;
      this.subtotal=this.subtotal+this.netprice;
    });
    this.shipping=this.cartitems.length*200;
    this.grandtotal=this.shipping+this.subtotal;
    }
  }
  proddetails(id:any){
    this.router.navigate(['/productdetails',{id}]);
  }
  removefromcart(id:any){
    this.cartitems= this.session.get('cart');
    this.cartitems.forEach(item => {
     if(item.Id==id){
       this.totalcost=this.totalcost-(item.Price*item.Quantity)-200;
       this.occurence=this.cartitems.lastIndexOf(item,this.cartitems.length);
       this.cartitems.splice(this.occurence,1);
       this.session.set('cart',this.cartitems);
       if(this.totalcost<=900000){
        this.session.set('totalordercost',this.totalcost);
       }       
     }
   });
    location.reload();
   }
   gotoshop(){
    this.router.navigate(['/shop']);
   }
   checkout(){
    this.router.navigate(['/checkout']);
   }
}
