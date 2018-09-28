import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WoocommerceProductsService } from '@services/products/woocommerce-products.service';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '@services/auth/auth.service';



@Component({
  selector: 'wooapi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private wooProducs: WoocommerceProductsService,
    private authService: AuthService
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
    // this.wooProducs.retriveProductCount().subscribe(response => {
    //   console.log(response);
    // }, err => {
    //   console.log(err);
    // });

    this.authService.generateAuthCookie({
      username: 'prosenjit3',
      password: 'pass123'
    }).subscribe(res => {
      console.log(res);
    })
  }

}
