import { Component } from '@angular/core';
import { ActivatedRoute, Router ,ActivatedRouteSnapshot } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { count } from 'rxjs';
import { DataService } from 'src/app/Services/Data/data.service';
import { StripeService } from 'src/app/Services/Stripe/stripe.service';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent {
  constructor(private stripeservice:StripeService,private dataservice:DataService,private session:SessionStorageService,private router:Router,private aroute:ActivatedRoute){}
  Responce:any={
    customerId:'',
    cardid:'',
    cards:[]
  };
  orderid:any;
  check=false;
  charge:any;
  abc:any={
    cost:this.session.get('totalordercost'),
    cardid:'',
    email:this.dataservice.getusername(),
    orderid:''
  }
  selectedcardid:any;
  costcheck:boolean=false;
  ngOnInit(){
    this.aroute.params.subscribe(param=>{this.orderid=param['orderid']});
    this.costcheck=this.abc.cost?true:false;
    this.stripeservice.getusercards().subscribe(card=>{this.Responce=card;
      if(this.Responce.cards.length>0)
      {this.check=true;
      }
    });
  }
  submit(){
    this.abc.cardid=this.selectedcardid;
    this.abc.orderid=this.orderid;
    this.stripeservice.createcharge(this.abc).subscribe(charge=>{this.charge=charge;

        
    this.router.navigate(['/ordersuccessfull']);
    });
  }
  gotoaddcard(){
   
    var returnUrl= this.router.url;
  this.router.navigate(["/addcard",{returnUrl}]);
  }
  
}
