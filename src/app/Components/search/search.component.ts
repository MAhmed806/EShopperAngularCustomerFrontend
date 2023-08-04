import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router){}
  product:any;
  ngOnInit(){
    this.route.params.subscribe(param=>{
      this.dataservice.search(param['search']).subscribe(product=>(this.product=product));
    });
  }
  getproddetail(id:any){
    let params={id};
    this.router.navigate(['/productdetails',params]);
  }

}
