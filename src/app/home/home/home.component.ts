import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { WoocommerceProductsService } from '@services/products/woocommerce-products.service';


@Component({
  selector: 'wooapi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private wooProducs: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(
        switchMap(params => this.wooProducs.retrieveProducts(params))
      ).subscribe(response => {
        console.log(response);
      }, err => {
        console.log(err);
      });
    // this.wooProducs.retrieveProducts().subscribe(response => {
    //   console.log(response);
    // }, err => {
    //   console.log(err);
    // });
  }

}
