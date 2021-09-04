import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxJsonViewerModule
  ]
})
export class ProductModule { }
