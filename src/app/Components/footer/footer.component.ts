import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  loggedin:boolean=false
  public constructor(private authservice:AuthService){}
  ngOnInit(){
    this.loggedin=this.authservice.isLoggedIn();
  }
}
