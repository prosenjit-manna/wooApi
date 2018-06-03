import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppInterceptor } from './http.interceptor';
import { WoocommerceProductsService } from '@services/products/woocommerce-products.service';
import { WoocommerceHelperService } from '@services/helper.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    WoocommerceProductsService,
    WoocommerceHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
