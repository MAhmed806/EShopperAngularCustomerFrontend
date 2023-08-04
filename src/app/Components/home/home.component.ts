import { Component } from '@angular/core';
import { Product } from 'src/app/Models/models';
import { DataService } from 'src/app/Services/Data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dataservice:DataService,private route:Router){}
  products:any;
  producttypes:any;
  ngOnInit(){
    this.dataservice.getProd().subscribe(products=>(this.products=products));
    this.dataservice.getProdType().subscribe(producttypes=>(this.producttypes=producttypes));
  }
  getproddetail(id:any){
    let params={id};
    this.route.navigate(['/productdetails',params]);
  }
  getprodtypedetail(id:any){
    let params={id}
    this.route.navigate(['/producttypedetails',params]);
  }
}