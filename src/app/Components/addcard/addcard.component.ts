import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { StorageUtil } from 'angular-web-storage';
import { DataService } from 'src/app/Services/Data/data.service';
import { StripeService } from 'src/app/Services/Stripe/stripe.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent {
  stripe: any;
  card: any;
  mycard:any;
  hello:any={
    name:'',
    token:'',
    email:this.dataservice.getusername()
  }

  constructor(private stripeService: StripeService,private dataservice:DataService,private router:Router,private aroute:ActivatedRoute) {}
  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51MKM41BV4fcsoG0jBDWqYu65EZ2ixB59LjBvG1dSZNCCfJTxb4Iq0AByIkH2dhw3v8CYHUra1Ck0icx7kDGmBWMt00eZqziXQw');
    const elements = this.stripe.elements();
    this.card = elements.create('card');
    this.card.mount('#card-element'); 
  }

  async submitform() {
    const { token, error } = await this.stripe.createToken(this.card);
    if (error) {
      const errorElement = document.getElementById('card-errors');
      if(errorElement!=null){
        errorElement.textContent = error.message;
      }
    } else {
      this.hello.token=token.id;
      this.stripeService.createcard(this.hello).subscribe(card=>{this.mycard=card;

       // location.href=returnUrl||"";
      });
      var returnUrl:any;  
      this.aroute.params.subscribe(param=>returnUrl=param['returnUrl']);
      console.log(returnUrl);
      location.href=returnUrl;
    }
  }
 

}
