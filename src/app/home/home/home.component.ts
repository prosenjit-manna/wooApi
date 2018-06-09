import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { switchMap } from 'rxjs/operators';

// import { WoocommerceProductsService } from '@services/products/woocommerce-products.service';
import { AuthService } from '@services/auth/auth.service';


@Component({
  selector: 'wooapi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private activatedRoute: ActivatedRoute,
    // private wooProducs: WoocommerceProductsService,
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
    // this.wooProducs.retrieveProducts().subscribe(response => {
    //   console.log(response);
    // }, err => {
    //   console.log(err);
    // });
    this.authService.register({
      nonce: '9a3d6eb071',
      username: 'aa',
      email: 'aa@aa.com',
      user_pass: 'abc123',
      notify: 'both',
      display_name: 'abc'
    })
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
