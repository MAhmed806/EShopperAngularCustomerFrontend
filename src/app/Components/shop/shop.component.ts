import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private dataservice:DataService,private router:Router){}
  products:any;
  prodlength:number=0;
  showAllPrices:any;
  pricelowtohigh:boolean=false;
  pricehightolow:boolean=false;
  minprice:any;
  maxprice:any;
  searchstring:any;
  ngOnInit(){
    if(this.showAllPrices&&this.minprice>0 &&this.maxprice>0 &&this.minprice<=this.maxprice){
      this.dataservice.filter(this.minprice,this.maxprice).subscribe(products=>{this.products=products;
      this.prodlength=this.products.length;
      });
    }if(!this.showAllPrices){
      this.dataservice.getProd().subscribe(products=>{this.products=products;
      this.prodlength=this.products.length;
    });
    }
  }
  getproddetail(id:any){
    let params={id}; 
    this.router.navigate(['/productdetails',params])
  }
  search(){
    this.products=null;
    if(this.searchstring!=null && this.searchstring!=''){this.dataservice.search(this.searchstring).subscribe(product=>{this.products=product;
      this.prodlength=this.products.length;
    });
      
    }
    else{
      this.ngOnInit();
    }
    
    // let ss=this.searchstring;
    // this.router.navigate(['/search',{ss}]);
  }
  lowtohigh(){
    if(this.pricelowtohigh==true){
      this.pricelowtohigh=false;
      this.ngOnInit();
    }
    else{
      this.pricelowtohigh=true;
      this.dataservice.lowtohigh().subscribe(prod=>this.products=prod);
      this.prodlength=this.products.length;
    }

  }
  hightolow(){
    if(this.pricehightolow==true){
      this.pricehightolow=false;
      this.ngOnInit();
    }
    else{
      this.pricehightolow=true;
      this.dataservice.hightolow().subscribe(prod=>this.products=prod);
      this.prodlength=this.products.length;
    }
  }

}
