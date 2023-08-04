import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';
import { SessionStorageService } from 'angular-web-storage';
import { empty } from 'rxjs';
import { Product } from 'src/app/Models/models';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  constructor(private dataservice:DataService,private route:ActivatedRoute,private session:SessionStorageService){}
  myform:FormGroup= new FormGroup ({});
  id:any;
  product:any;
  myproduct:any;
  presentincart:boolean=false;
  cartitems:any[]=[];
  occurence:number | undefined;
  totalcost=0;
  ngOnInit(){
    this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.dataservice.getproddetails(this.id).subscribe((product)=>{
      this.product=product;
       this.myform=new FormGroup({
        Id:new FormControl(this.id),
        Name:new FormControl(this.product.name),
        Price:new FormControl(this.product.price),
        PColor:new FormControl(this.product.pColor),
        Availablequantity:new FormControl(this.product.availablequantity),
        Quantity:new FormControl(this.product.quantity,[Validators.required,Validators.min(1),Validators.max(this.product.availablequantity)]),
        ProductTypeID:new FormControl(this.product.productTypeID),
        ProductType:new FormControl(this.product.productTypes.productType),
        Image:new FormControl(this.product.image),
        ProductTypes:new FormControl(this.product.productTypes)
        });     
    });
    
    });
  if(this.session.get('cart')==null){
    this.presentincart=false;
  }else{
    this.cartitems=this.session.get('cart');
    this.cartitems.forEach(item => {
      if(item.Id ==this.id){
        this.presentincart=true;
      }
    });
  }
}
Submit(){
  console.log(this.myform);
if(this.session.get('cart')!=null){
  this.cartitems=this.session.get('cart');
  this.cartitems.push(this.myform.value);
  this.session.set('cart',this.cartitems);
  this.cartitems.forEach(item=>{
    this.totalcost=this.totalcost+(item.Price*item.Quantity)+200;
  });
  this.session.set('totalordercost',this.totalcost);
}
  else
  {
    this.cartitems.push(this.myform.value);
    this.session.set('cart',this.cartitems);
    this.cartitems.forEach(item=>{
      this.totalcost=this.totalcost+(item.Price*item.Quantity)+200;
    });
    this.session.set('totalordercost',this.totalcost);
  }
   location.reload();
}
removefromcart(id:any){
 this.cartitems= this.session.get('cart');
 this.cartitems.forEach(item => {
  if(item.id==id){
    this.totalcost=this.session.get('totalordercost')-item.Price*item.Quantity-200;
    console.log(this.totalcost);
    this.occurence=this.cartitems.lastIndexOf(item,this.cartitems.length);
    this.cartitems.splice(this.occurence,1);
    this.session.set('cart',this.cartitems);
    this.session.set('totalordercost',this.totalcost);
  }
});
 location.reload();
}
}
