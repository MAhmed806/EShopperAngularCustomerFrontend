import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { ProducttypedetailsComponent } from './Components/producttypedetails/producttypedetails.component';
import { SearchComponent } from './Components/search/search.component';
import { ShopComponent } from './Components/shop/shop.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderslistComponent } from './Components/orderslist/orderslist.component';
import { OrderdetailsComponent } from './Components/orderdetails/orderdetails.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { Authguard } from './Authguard';
import { ChargeComponent } from './Components/charge/charge.component';
import { AddcardComponent } from './Components/addcard/addcard.component';
import { OrdersuccessfullComponent } from './Components/ordersuccessfull/ordersuccessfull.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:"shop",component:ShopComponent},
{path:"orderslist",canActivate:[Authguard],component:OrderslistComponent},
{path:"cart",component:CartComponent},
{path:"contact",component:ContactComponent},
{path:"productdetails",component:ProductdetailsComponent},
{path:"producttypedetails",component:ProducttypedetailsComponent},
{path:"search",component:SearchComponent},
{path:"checkout",canActivate:[Authguard],component:CheckoutComponent},
{path:"orderdetails",canActivate:[Authguard],component:OrderdetailsComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"charge",canActivate:[Authguard],component:ChargeComponent},
{path:"addcard",canActivate:[Authguard],component:AddcardComponent},
{path:"ordersuccessfull",canActivate:[Authguard],component:OrdersuccessfullComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
