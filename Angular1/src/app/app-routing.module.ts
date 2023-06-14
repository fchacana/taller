import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { SalesComponent } from './components/sales/sales.component';
import { SaledetailsComponent } from './components/saledetails/saledetails.component';
import { ValidateCreditCardComponent } from './components/validate-credit-card/validate-credit-card.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'product-details/:id', component: ProductdetailsComponent, canActivate: [AuthGuard] },
  { path: 'createproduct', component: CreateproductComponent, canActivate: [AuthGuard] },
  { path: 'validate-sale', component: ValidateCreditCardComponent, canActivate: [AuthGuard] },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'sales-details/:id', component: SaledetailsComponent, canActivate: [AuthGuard] },
  { path: 'update-product/:id', component: UpdateproductComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
