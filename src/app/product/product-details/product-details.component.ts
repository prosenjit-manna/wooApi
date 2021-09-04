import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WoocommerceProductsService } from 'projects/ngx-wooapi/src/lib';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  getProductsResponse: any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private wooProducs: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.wooProducs.getProduct(this.activatedRoute.snapshot.params.id).subscribe(response => {
      this.getProductsResponse = response;
    }, err => {
      console.log(err);
    });
  }

}
