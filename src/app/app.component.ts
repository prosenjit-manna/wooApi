import { Component, OnInit } from '@angular/core';
import { WoocommerceProductsService } from '../../projects/ngx-wooapi/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wooApiWrapper';

  constructor(
    private wooProducs: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.wooProducs.getProducts().subscribe(response => {
      console.log(response.products);
    }, err => {
      console.log(err);
    });
  }
}
