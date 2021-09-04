import { Component, OnInit } from '@angular/core';
import { WoocommerceProductsService } from 'projects/ngx-wooapi/src/lib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
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
