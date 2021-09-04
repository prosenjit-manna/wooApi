import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './interceptor';

import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.module').then(
        (products) => products.ProductModule
      ),
  },
  {
    path: 'api-index',
    loadChildren: () =>
      import('./api-index/api-index.module').then(
        (m) => m.ApiIndexModule
      ),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    NgxJsonViewerModule,
  ],
  exports: [NgxJsonViewerModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
