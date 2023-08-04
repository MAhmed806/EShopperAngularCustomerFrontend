import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EShopperAngularCustomer';
  showheaderfooter:boolean=true;
  constructor(){
    if((window.location.href).includes('/login')||(window.location.href).includes('/register')){
      this.showheaderfooter=false;
    }
  }
 
}
