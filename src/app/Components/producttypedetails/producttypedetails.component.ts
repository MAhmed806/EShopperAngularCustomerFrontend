import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-producttypedetails',
  templateUrl: './producttypedetails.component.html',
  styleUrls: ['./producttypedetails.component.css']
})
export class ProducttypedetailsComponent {
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router){}
  producttype:any;
  id:any;
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id= +params['id'];
      this.dataservice.getprodtypedetails(this.id).subscribe(producttype=>(this.producttype=producttype));
    });
  
  }
  getdetails(id:any){
    this.router.navigate(['/productdetails',{id}]);
  }
}
