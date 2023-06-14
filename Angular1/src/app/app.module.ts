import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Import the module from the SDK
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableproductComponent } from './components/dashboard/tableproduct/tableproduct.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TeamsectionComponent } from './components/teamsection/teamsection.component';
import { ProductService } from './services/product/product.service';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { FormsModule } from '@angular/forms';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { SalesComponent } from './components/sales/sales.component';
import { SaledetailsComponent } from './components/saledetails/saledetails.component';
import { TruncateLetterPipe } from './pipes/truncate-letter.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ClockPipe } from './pipes/clock.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ValidateCreditCardComponent } from './components/validate-credit-card/validate-credit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    TeamsectionComponent,
    NotfoundComponent,
    DashboardComponent,
    TableproductComponent,
    CreateproductComponent,
    UpdateproductComponent,
    ProductdetailsComponent,
    CartComponent,
    SalesComponent,
    SaledetailsComponent,
    TruncateLetterPipe,
    CapitalizePipe,
    ClockPipe,
    FooterComponent,
    OrderListPipe,
    ValidateCreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
    AuthModule.forRoot({
      domain: 'dev-xctidfzxhhkivosk.us.auth0.com',
      clientId: '8RNx62utUzlD9yJQWpTvxt2kW5AvaFLe',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
