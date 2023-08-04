import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';
import { StripeService } from 'src/app/Services/Stripe/stripe.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  constructor(private route:ActivatedRoute,private dataservice:DataService,private router:Router,private stripeservice:StripeService){}
  order:any={
    id:0,
  };
  refund:any;
  refundstatus="";
  orderid:any;
  ngOnInit(){
    this.route.params.subscribe(params=>{
    this.orderid=+params['id'];
    this.dataservice.getorderdetails(this.orderid).subscribe(order=>{this.order=order});
    ;})
  }
  cancel(id:any){
    var result =confirm("Are You Sure You Want to Cancel this Order?");
    if(result){
      this.dataservice.cancelorder(id).subscribe(order=>{
        this.stripeservice.refund(id).subscribe(responce=>{this.refund=responce;
          if(this.refund?.message!=null){
            this.refundstatus=this.refund.message;
          }else{
            this.refundstatus="Refund Initiated Successfully";
          }
          this.order=order;
          });
    });
    }
  }
  gotoproddetail(id:any){
    this.router.navigate(['/productdetails',{id}]);
  }

}
