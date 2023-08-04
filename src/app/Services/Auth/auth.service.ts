import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AuthUrl='https://localhost:44385/api/Auth/';
  registerresponce:any;
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService,private route:ActivatedRoute,private router:Router) {}

  login(Email: string, PasswordHash: string,RememberMe:boolean) {    
    return this.http.post<any>(this.AuthUrl+'login/',{Email,PasswordHash,RememberMe});
  }
  logout() {
    localStorage.removeItem('access_token');
  }
  isLoggedIn() {
    const token = localStorage.getItem('access_token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }
  register(FirstName:string,LastName:string,Email:string,PhoneNumber:string,PasswordHash:string){
    return this.http.post(this.AuthUrl+'register/',{FirstName,LastName,Email,PhoneNumber,PasswordHash});
    // this.router.navigate(['/login']);
    // });
  }
}