import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { switchMap } from 'rxjs/operators';

import { WoocommerceProductsService } from '@services/products/woocommerce-products.service';
import { AuthService } from '@services/auth/auth.service';


@Component({
  selector: 'wooapi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private activatedRoute: ActivatedRoute,
    private wooProducs: WoocommerceProductsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.activatedRoute.queryParams
    //   .pipe(
    //     switchMap(params => this.wooProducs.retrieveProducts(params))
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
    this.authService.register({
      user_pass: 'abc',
      username: 'abc',
      email: 'prosenjit+auth2@itobuz.com',
      notify: 'both',
      nonce: 'dc60f830f6',
      display_name: 'a'
    })
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
