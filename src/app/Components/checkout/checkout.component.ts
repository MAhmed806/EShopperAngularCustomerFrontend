import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Order, OrderDetails } from 'src/app/Models/models';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private session:SessionStorageService,private router:Router,private dataservice:DataService){}
  myform: FormGroup= new FormGroup ({});
  cartitems:any[]=[];
  netprice=0;
  subtotal=0;
  shipping=0;
  grandtotal=0;
  orderstat:any;
  Order:Order={
    CustomerName: '',
    CustomerPhone: 0,
    CustomerEmail: '',
    CustomerAddress: '',
    OrderCost: 0,
    PaymentMethod: '',
    OrderDetails: [],
    UserId: '',
    id: 0
  };
  ngOnInit(){
    this.cartitems=this.session.get('cart');
    this.shipping=this.cartitems.length*200;
    this.cartitems.forEach(item=> {
      this.netprice=item.Price*item.Quantity;
      this.subtotal=this.subtotal+this.netprice;
    });
    this.grandtotal=this.subtotal+this.shipping;
    this.myform=new FormGroup({
      CustomerName:new FormControl('',Validators.required),
      CustomerAddress:new FormControl('',Validators.required),
      CustomerEmail:new FormControl('',[Validators.required,Validators.email]),
      CustomerPhone:new FormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]),
      PaymentMethod:new FormControl('',Validators.required),
    });
  }
  gotoshop(){
    this.router.navigate(['/shop']);
  }
  Submit(){
     this.Order=this.myform.value;
     this.Order.OrderCost=this.grandtotal;
     this.Order.UserId=this.dataservice.getusername();
     this.Order.OrderDetails=[];
     this.cartitems.forEach(item=>{
     this.Order.OrderDetails.push({ProductId:item.Id,ProductQuantity:item.Quantity});
      });
    this.dataservice.placeorder(this.Order).subscribe(orderstat=>{this.orderstat=orderstat;
      console.log(this.Order);
      if(this.Order.PaymentMethod=='Credit Card'){
        let orderid= this.orderstat.id;
        this.router.navigate(['/charge',{orderid}]);
      }else{
        this.router.navigate(['/ordersuccessfull'])
      }
    });
  }

}
