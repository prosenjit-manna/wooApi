import { Component, OnInit } from '@angular/core';
import { WoocommerceProductsService } from '@services/products/woocommerce-products.service';
import { Product } from '@services/products/product.interface';

@Component({
  selector: 'wooapi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private wooProducs: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.wooProducs.retriveProducts().subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

}
