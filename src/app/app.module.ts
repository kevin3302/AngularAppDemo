import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { Productdetails1Component } from './productdetails1/productdetails1.component';
import { Productdetails2Component } from './productdetails2/productdetails2.component';
import { Productdetails3Component } from './productdetails3/productdetails3.component';
import { Productdetails4Component } from './productdetails4/productdetails4.component';
import { Productdetails5Component } from './productdetails5/productdetails5.component';
import { Productdetails6Component } from './productdetails6/productdetails6.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    Productdetails1Component,
    Productdetails2Component,
    Productdetails3Component,
    Productdetails4Component,
    Productdetails5Component,
    Productdetails6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
