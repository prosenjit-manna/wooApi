import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./product-list/product-list.module')
          .then(list => list.ProductListModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./product-details/product-details.module')
          .then(details => details.ProductDetailsModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
