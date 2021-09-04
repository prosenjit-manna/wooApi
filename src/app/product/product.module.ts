import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, NgxJsonViewerModule],
})
export class ProductModule {}
