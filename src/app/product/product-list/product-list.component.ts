import { Component, OnInit } from '@angular/core';
import { WoocommerceProductsService } from 'projects/ngx-wooapi/src/lib';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  getProductsResponse: any;
  
  constructor(
    private wooProducs: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.wooProducs.getProducts().subscribe(response => {
      this.getProductsResponse = response;
    }, err => {
      console.log(err);
    });
  }

}
