import { Component, OnInit } from '@angular/core';
import { WoocommerceProductsService } from '@services/woocommerce-products.service';
import { Product } from '@services/product.interface';

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
    const createProduct: Product =  {
      name: 'Premium Quality',
      type: 'simple',
      regular_price: '21.99',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada ',
      short_description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      categories: [
        {
          id: 9
        },
        {
          id: 14
        }
      ],
      images: [
        {
          src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg',
          position: 0
        },
        {
          src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg',
          position: 1
        }
      ]
    };
    // this.wooProducs.createProduct(createProduct).subscribe(response => {
    //   console.log(response);
    // }, err => {
    //   console.log(err);
    // });
  }

}
