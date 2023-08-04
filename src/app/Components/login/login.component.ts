import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import * as bcrypt from 'bcryptjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthService:AuthService,private router:Router,private route:ActivatedRoute){}
  loginresponce:any;
  successmessage="";
  errormessage="";
  loginform:any;
  fieldTextType:boolean=false;
  Email:any;
  Password:any;
  Rememberme:any
  ngOnInit(){
    if(this.AuthService.isLoggedIn()){
      location.href="";
    }
    this.loginform=new FormGroup({
      Email:new FormControl('',[Validators.required,Validators.email]),
      Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      RememberMe:new FormControl(true)
    })
  }
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }
  Submit(){
    this.Email=this.loginform.value.Email;
    this.Password=this.loginform.value.Password;
    this.Rememberme=this.loginform.value.RememberMe;
    this.AuthService.login(this.Email,this.Password,this.Rememberme).subscribe(respo=>{
      this.loginresponce=respo;
      if(this.loginresponce.result.succeeded){
        this.successmessage="Login Successfull";
        localStorage.setItem('access_token',respo.token);
        setTimeout(() => {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          location.href=returnUrl||"";
        }, 1000);
      }else{
        this.errormessage="Invalid Credentials";
        setTimeout(() => {
          this.errormessage="";
        }, 5000);
      }
  });
  }
}