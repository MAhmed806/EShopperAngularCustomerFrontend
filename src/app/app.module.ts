import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ShopComponent } from './Components/shop/shop.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { ProducttypedetailsComponent } from './Components/producttypedetails/producttypedetails.component';
import { SearchComponent } from './Components/search/search.component';
import { SortComponent } from './Components/sort/sort.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { OrderslistComponent } from './Components/orderslist/orderslist.component';
import {DataTablesModule} from 'angular-datatables';
import { OrderdetailsComponent } from './Components/orderdetails/orderdetails.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component'
import { JwtModule } from '@auth0/angular-jwt';
import { ChargeComponent } from './Components/charge/charge.component';
import { AddcardComponent } from './Components/addcard/addcard.component';
import { OrdersuccessfullComponent } from './Components/ordersuccessfull/ordersuccessfull.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ShopComponent,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProductdetailsComponent,
    ProducttypedetailsComponent,
    SearchComponent,
    SortComponent,
    CheckoutComponent,
    OrderslistComponent,
    OrderdetailsComponent,
    LoginComponent,
    RegisterComponent,
    ChargeComponent,
    AddcardComponent,
    OrdersuccessfullComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: [''],
        disallowedRoutes: [''],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
