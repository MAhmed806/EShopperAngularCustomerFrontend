import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent {

  constructor(private dataservice:DataService,private router:Router){}
  orders:any;
  dtoptions:DataTables.Settings={};
  dttrigger: Subject<any> = new Subject();
  username:any;

ngOnInit(){
  this.dtoptions={pagingType:'full_numbers',stateSave:true,stateDuration:10};
  this.username=this.dataservice.getusername();
  this.dataservice.getorderslistspecific(this.username).subscribe(orders=>{this.orders=orders;
    this.dttrigger.next(null);
  });
}
gotodetail(id:any){
this.router.navigate(['/orderdetails',{id}]);
}

}
