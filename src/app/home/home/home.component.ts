import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WoocommerceProductsService } from '@services/products/woocommerce-products.service';
import { switchMap } from 'rxjs/operators';


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
    // this.activatedRoute.queryParams
    //   .pipe(
    //     switchMap(params => this.wooProducs.retrieveProductCount(params))
    //   ).subscribe(response => {
    //     console.log(response);
    //   }, err => {
    //     console.log(err);
    //   });
    this.wooProducs.retrieveProducts().subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

}
